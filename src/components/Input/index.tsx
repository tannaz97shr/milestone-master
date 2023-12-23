interface InputProps extends React.InputHTMLAttributes<InputProps> {
  title: string;
  isTextArea?: boolean;
}

const Input = ({ title, type, name, isTextArea }: InputProps) => {
  return (
    <label
      className="flex x justify-between capitalize p-2 gap-2 mb-2 
  border-b border-orange text-dark-blue"
    >
      {title}:
      {isTextArea ? (
        <textarea
          name={name}
          className="w-72 p-1 bg-light-pink rounded bg-transparent border border-orange focus-visible:outline-0"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-72 p-1 bg-light-pink rounded bg-transparent border border-orange focus-visible:outline-0"
        />
      )}
    </label>
  );
};

export default Input;
