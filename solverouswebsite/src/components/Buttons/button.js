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
      onClick={btnFunc}
      className={`
        cursor-pointer w-fit rounded-lg
        transition-all duration-300 active:scale-95
        text-[0.85rem] md:text-[1rem] lg:text-[0.93rem]
        ${buttonCustomStyle}
      `}
    >
      {title}
    </button>
  );
}

export default Button;