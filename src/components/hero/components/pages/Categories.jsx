import useThemeStore from '@/store/themeStore';

const Categories = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`flex flex-1 justify-between ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'} `}
    >
      <div className="max-w-7xl mx-auto flex flex-1 justify-between">
        <h1 className="text-sm p-3 m-3"> Category</h1>
        <h1 className="text-sm p-3 m-3">Category dropdown</h1>
      </div>
    </div>
  );
};

export default Categories;
