import { useState } from "react";
const microphoneIcon = "/icons/micGrey.svg";
const searchIcon = "/icons/searchIconGray.svg";
import toast from "react-hot-toast";

declare global {
  interface Window {
    webkitSpeechRecognition: SpeechRecognition;
  }
}

type SpeechRecognition = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onresult: (event: any) => void;
};

interface VoiceSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const VoiceSearchInput = ({
  value,
  onChange,
  placeholder = "search...",
  className = "",
}: VoiceSearchInputProps) => {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window)) {
      toast.error("Your browser does not support speech.");
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onChange(transcript);
    };

    recognition.start();
  };

  return (
    <div className={`relative w-full ${className}`}>
      <img
        src={searchIcon}
        alt="search icon"
        className="w-[22px] h-[22px] absolute left-2 top-2"
      />
      <img
        src={microphoneIcon}
        alt="microphone icon"
        className={`w-[22px] h-[22px] absolute right-2 top-2 cursor-pointer ${
          isListening ? "opacity-60" : ""
        }`}
        onClick={handleVoiceSearch}
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#7878801F] py-2 rounded-full px-10 outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default VoiceSearchInput;
