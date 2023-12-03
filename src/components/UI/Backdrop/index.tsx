interface BackdropProps {
  onClick?: () => void;
}

function Backdrop({ onClick }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 backdrop-blur bg-opacity-75 transition-opacity"
    />
  );
}

export default Backdrop;
