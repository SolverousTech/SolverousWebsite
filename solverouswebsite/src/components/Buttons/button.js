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
        cursor-pointer w-fit py-4 px-[30%] md:py-2 md:px-4 rounded-lg
        transition-all duration-300 active:scale-95
        bg-[#007EE6] text-white hover:bg-[#066dc2] md:text-[0.93rem] text-[1.25rem]
        ${buttonCustomStyle}
      `}
    >
      Contact Us
    </button>
  );
}

export default Button;