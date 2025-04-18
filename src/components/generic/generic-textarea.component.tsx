import React from "react";

interface TextareaProps {
  label: string;
  value: any;
  name:string,
  id?:string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?:number
}

const GenericTextarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  error,
  placeholder,
  id,
  name,
  rows=3
}) => {
  return (
    <div>
      <label className="block text-xs font-bold text-dark/80">{label}</label>
      <textarea
        value={value}
        id={id || name}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        name={name}
        className={`mt-1 block w-full px-3 py-[0.6rem] rounded-lg bg-gray-transparent text-dark text-sm font-semibold placeholder:text-gray sm:text-sm ${
          error ? "border-red-500" : "border-gray/70"
        }`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
};

export default GenericTextarea;
