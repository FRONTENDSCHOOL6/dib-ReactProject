function AutoLoginButton() {
  return (
    <div className="flex flex-row items-center gap-1 w-[600px]">
      <label htmlFor="autoLogin">
        <img src="/checked.png" alt="" className="w-6 h-6" />
      </label>
      <input type="checkbox" id="autoLogin" className="ml-5 mt-2 hidden" />
      <span className="text-lg font-normal">자동로그인</span>
    </div>
  );
}

export default AutoLoginButton;
