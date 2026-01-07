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
        cursor-pointer w-fit py-2 px-4 rounded-lg
        text-sm font-medium transition-all duration-300
        bg-[#007EE6] text-white hover:bg-[#066dc2]
        ${buttonCustomStyle}
      `}
    >
      Contact Us
    </button>
  );
}

export default Button;