function Button({
  title,
  btnFunc,
  type = "default",
  imageUrl,
  buttonCustomStyle = "",
  imageCustomStyle = "",
  formSubmit = "button",
}) {
  return (
    <button
      type="button"
    //   onClick={}
      className={`
        cursor-pointer w-fit rounded-lg
        transition-all duration-300 active:scale-95
        md:text-[0.93rem] text-xl
        ${buttonCustomStyle}
      `}
    >
      {title}
    </button>
  );
}

export default Button;