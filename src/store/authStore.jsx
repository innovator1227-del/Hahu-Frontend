import { createContext, useContext, useEffect, useState } from "react";
import { users as initialUsers } from "../data/users";

const AuthContext = createContext()
const AUTH_STORAGE_KEY = "hahu_auth_user"
const USERS_STORAGE_KEY = "hahu_mock_users";

const getStoredUser = () => {
  if (typeof window === "undefined") return null
  try {
    const storedValue = window.localStorage.getItem(AUTH_STORAGE_KEY)
    return storedValue ? JSON.parse(storedValue) : null
  } catch {
    return null
  }
}

const getStoredUsers = () => {
  if (typeof window === "undefined") return initialUsers;

  try {
    const storedValue = window.localStorage.getItem(USERS_STORAGE_KEY);

    return storedValue ? JSON.parse(storedValue) : initialUsers;
  } catch {
    return initialUsers;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser)
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY)
    }
  }, [user])

  const normalizeEmail = (value) => value?.trim().toLowerCase() || ""

  const getRoleFromEmail = (email) => {
    return email === "admin@hahumarket.com" || email?.includes("admin") ? "admin" : "user"
  }

  const login = async ({ email, password, rememberMe }) => {
    setIsLoading(true)
    setAuthError(null)

    const normalizedEmail = normalizeEmail(email)
    if (!normalizedEmail || !password) {
      setAuthError("Please enter both email and password.")
      setIsLoading(false)
      return null
    }

    const foundUser = getStoredUsers().find(
      (user) => user.email === normalizedEmail && user.password === password
    );

    if (!foundUser) {
      setAuthError("Invalid email or password.")
      setIsLoading(false)
      return null
    }

    const authenticatedUser = {
      id: foundUser.id,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: normalizedEmail,
      name: normalizedEmail.split("@")[0] || "Guest",
      role: getRoleFromEmail(normalizedEmail),
      rememberMe: Boolean(rememberMe),
      authenticatedAt: new Date().toISOString(),
    }

    setUser(authenticatedUser)
    setIsLoading(false)

    return authenticatedUser
  }

  const register = async ({ firstName, lastName, email, phone, location, nationalId, password }) => {
    setIsLoading(true)
    setAuthError(null)

    const normalizedEmail = normalizeEmail(email)
    if (!normalizedEmail || !password || !firstName || !lastName) {
      setAuthError("Please fill in all required fields to complete registration.")
      setIsLoading(false)
      return null
    }

    const storedUsers = getStoredUsers();
    const existingUser = storedUsers.find(
  (user) => user.email === normalizedEmail
);

if (existingUser) {
  setAuthError("An account with this email already exists.");
  setIsLoading(false);
  return null;
}

    const registeredUser = {
  id: Date.now(),
  firstName: firstName.trim(),
  lastName: lastName.trim(),
  email: normalizedEmail,
  password,
  phone: phone || "",
  location: location || "",
  nationalIdName: nationalId?.name || "",
  role: "user",
  registeredAt: new Date().toISOString(),
};

const updatedUsers = [...storedUsers, registeredUser];

window.localStorage.setItem(
  USERS_STORAGE_KEY,
  JSON.stringify(updatedUsers)
);

    const authenticatedUser = {
  id: registeredUser.id,
  firstName: registeredUser.firstName,
  lastName: registeredUser.lastName,
  email: registeredUser.email,
  name: `${registeredUser.firstName} ${registeredUser.lastName}`,
  phone: registeredUser.phone,
  location: registeredUser.location,
  role: registeredUser.role,
  registeredAt: registeredUser.registeredAt,
};

setUser(authenticatedUser);
setIsLoading(false);

return authenticatedUser;
  }

  const logout = () => {
    setUser(null)
  }

  const clearAuthError = () => {
    setAuthError(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, authError, login, register, logout, clearAuthError }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
