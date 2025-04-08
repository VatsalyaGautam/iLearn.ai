import React from "react";
import { Timeline } from "@/components/ui/About/timeline";
import Navbar from "../Navbar";

export function TimelineDemo() {
  const data = [
    {
      title: "2020: Founding and Initial Research",
      content: (
        <div>
          <h3 className="text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Establishing AI Research Foundation
          </h3>
          <p className="text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            igebra.ai was founded with a focus on AI research and development, aiming to explore the potential of AI in various sectors. The company's early research efforts concentrated on understanding the current state of AI technologies and identifying areas where AI could significantly impact industries such as healthcare, finance, and education. By establishing a strong research foundation, igebra.ai set the stage for future innovations in AI.
          </p>
        </div>
      ),
    },
    {
      title: "2021: Expansion into Education",
      content: (
        <div>
          <h3 className="text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            AI Education Initiatives
          </h3>
          <p className="text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            igebra.ai began offering educational programs and courses in AI, focusing on making AI accessible to a broader audience. These initiatives included workshops, online courses, and partnerships with educational institutions to integrate AI into existing curricula. By educating the next generation of AI professionals, igebra.ai contributed to the growth of a skilled workforce capable of driving AI innovation forward.
          </p>
        </div>
      ),
    },
    {
      title: "2022: Development of AI Solutions",
      content: (
        <div>
          <h3 className=":text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            AI Solution Development
          </h3>
          <p className="text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            igebra.ai started developing AI-powered solutions for various industries, leveraging advancements in machine learning and NLP. These solutions aimed to automate tasks, enhance decision-making processes, and improve efficiency across sectors. By applying AI to real-world problems, igebra.ai demonstrated its commitment to practical innovation and customer-centric solutions.
          </p>
        </div>
      ),
    },
    {
      title: "2023: Focus on Multilingual AI",
      content: (
        <div>
          <h3 className="text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Multilingual AI Research
          </h3>
          <p className="text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            igebra.ai intensified its research on multilingual AI capabilities, aiming to improve language understanding and generation across different languages. This focus enabled the company to develop AI systems that could effectively process and generate content in multiple languages, thereby expanding its reach and utility globally. By overcoming language barriers, igebra.ai's AI solutions became more accessible and valuable to diverse user groups.
          </p>
        </div>
      ),
    },
    {
      title: "2024: Model Refinement and Testing",
      content: (
        <div>
          <h3 className="text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Advanced Model Training
          </h3>
          <p className="text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            The company focused on refining its AI models through extensive testing and validation, ensuring high accuracy and reliability. This process involved training models on large datasets, fine-tuning parameters, and conducting rigorous performance evaluations. By continuously improving its AI models, igebra.ai enhanced their ability to handle complex tasks and provide accurate results, which is crucial for real-world applications.
          </p>
        </div>
      ),
    },
    {
      title: "2025: Ethical AI Deployment",
      content: (
        <div>
          <h3 className="text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Ethical AI Deployment
          </h3>
          <p className="text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            igebra.ai prioritized ethical considerations in AI deployment, emphasizing transparency, fairness, and compliance with regulatory standards. The company implemented measures to ensure data privacy, model interpretability, and inclusivity in multilingual contexts. By adopting an ethical approach to AI deployment, igebra.ai demonstrated its commitment to responsible innovation and user trust.
          </p>
        </div>
      ),
    },
    {
      title: "Future: Expanding AI Capabilities",
      content: (
        <div>
          <h3 className="text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Future AI Innovations
          </h3>
          <p className="text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            igebra.ai continues to explore new AI applications, including advanced document analysis and AI-driven knowledge discovery, pushing the boundaries of AI in multilingual contexts. The company is committed to continuous improvement, investing in research and development to stay at the forefront of AI innovation. By expanding its AI capabilities, igebra.ai aims to create more sophisticated tools that can transform industries and improve lives.
          </p>
        </div>
      ),
    },
  ];
  
  
  return (

    <div className="w-full pt-8 font-ubuntu">
      <Timeline
        data={data}
        className="timeline transition-all ease-in-out duration-300"
      />
    </div>
  );
}
