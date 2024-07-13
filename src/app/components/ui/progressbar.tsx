interface ProgressBarProps {
    progress: number;
  }
  
  const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
      <div className="bg-gray-200 rounded overflow-hidden">
        <div
          className="bg-[#0069E5] h-2 rounded transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };
  
  export default ProgressBar;