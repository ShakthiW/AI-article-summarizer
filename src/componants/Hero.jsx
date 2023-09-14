import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="SRW_summarizer" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/ShakthiW/AI-article-summarizer")}
          className="black_btn"
        >
          Source Code
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4 </span>
      </h1>

      <h2 className="desc">
        Welcome to SRW Summariser, where cutting-edge technology meets your
        reading needs. With OpenAI GPT-4, we provide concise summaries of
        lengthy articles, making information accessible and digestible. Say
        goodbye to information overload and hello to efficient reading!
      </h2>
    </header>
  );
};

export default Hero;
