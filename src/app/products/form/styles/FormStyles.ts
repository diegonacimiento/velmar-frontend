export const formStyles = {
  // Fields
  container: "flex flex-col gap-2 text-secondary",
  label: "px-1 text-sm",
  labelError: " text-red-600",
  input:
    "border rounded-lg border-secondary p-1.5 focus:outline-offset-1 focus:outline-1 focus:outline-primary",
  inputError:
    " border-red-400 bg-red-300 bg-opacity-30 focus:outline-red-400 text-red-600",
  textArea:
    "border rounded-lg border-secondary p-1.5 h-80 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none",
  textAreaError:
    " border-red-400 bg-red-300 bg-opacity-30 focus:outline-red-400 text-red-600",
  error: "px-1 h-4 text-xs text-red-600",
  buttonPrimary:
    "border border-secondary p-2 mx-auto my-1 rounded-lg w-max hover:bg-primary",
  containerSelect: "flex items-center gap-2",
  select:
    "px-1.5 py-2 border border-secondary rounded-lg w-full focus:outline-0",
  buttonDelete:
    "flex justify-center items-center h-8 w-8 rounded-full text-xl hover:bg-primary",

  // Images component
  buttonSlideImage:
    "absolute p-1.5 m-1 h-max text-2xl text-secondary hover:bg-secondary hover:text-primary hover:rounded-full hover:scale-105 duration-150",
  containerImage:
    "flex overflow-x-scroll whitespace-nowrap overscroll-x-contain snap-mandatory snap-x scroll-smooth w-full",
  buttonPS:
    "p-3 mt-4 text-secondary bg-primary hover:bg-secondary hover:text-primary hover:scale-105 duration-150",
    buttonSP: "p-3 mt-4 text-primary bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150"
};
