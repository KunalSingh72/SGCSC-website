import { useRef, useState } from "react";
import { X } from "lucide-react";

type FileUploadProps = {
  label: string;
  accept?: string;
  minSizeKB?: number;
  maxSizeKB?: number;
  required?: boolean;
};

export default function FileUpload({
  label,
  accept = "image/*",
  minSizeKB = 100,
  maxSizeKB = 300,
  required = false,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return; // Cancelled selection → ignore

    const sizeKB = selectedFile.size / 1024;

    if (sizeKB < minSizeKB || sizeKB > maxSizeKB) {
      setError(`File size must be between ${minSizeKB}KB and ${maxSizeKB}KB`);
      setFile(null);
    } else {
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>

      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700
            file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0
            file:text-sm file:font-semibold
            file:bg-green-600 file:text-white
            hover:file:bg-green-700 transition"
          required={required && !file}
        />

        {file && (
          <button
            type="button"
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 transition"
            title="Remove file"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {file && (
        <p className="text-sm text-gray-600 mt-1 truncate">
          Selected: <span className="font-medium">{file.name}</span>
        </p>
      )}

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
