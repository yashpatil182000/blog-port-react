import React from "react";
import AiImg from "../assets/ai.jpg";
import WomensCricketImg from "../assets/womens-cricket.png";
import BudgetImg from "../assets/budget.png";

function Featuredpost() {
  const featuredPosts = [
    {
      id: "001",
      time: "2-Feb-2025",
      tag: "Technology",
      image: AiImg,
      title: "The Rise of AI: Transforming the Future of Technology",
      description: `<p className="text-base  mb-4">
            Artificial Intelligence (AI) has emerged as one of the most
            groundbreaking technological advancements of the 21st century. From
            automating mundane tasks to revolutionizing industries, AI is
            reshaping the way we live, work, and interact. But what exactly is
            AI, and why is it gaining so much attention?
          </p>
          <h2 className="text-2xl font-semibold  mb-3">What is AI?</h2>
          <p className="text-base  mb-4">
            AI refers to the simulation of human intelligence in machines that
            can think, learn, and make decisions. It encompasses several
            subfields, including Machine Learning (ML), Natural Language
            Processing (NLP), and Computer Vision.
          </p>
          <h2 className="text-2xl font-semibold  mb-3">
            How AI is Changing the World
          </h2>
          <p className="text-base  mb-4">
            AI is making a significant impact in various industries, such as
            Healthcare, Finance, E-commerce, Education, and Autonomous Vehicles.
          </p>
          <h3 className="text-lg font-semibold  mb-2">Healthcare</h3>
          <p className="text-base  mb-4">
            AI-powered diagnostics help doctors detect diseases early, while
            robotic surgeries enhance precision. AI chatbots assist patients
            with medical queries, making healthcare more accessible.
          </p>
          <h3 className="text-lg font-semibold  mb-2">Finance</h3>
          <p className="text-base  mb-4">
            AI algorithms predict stock market trends, detect fraudulent
            transactions, and automate customer service in banking.
          </p>
          <h3 className="text-lg font-semibold  mb-2">E-commerce</h3>
          <p className="text-base  mb-4">
            AI personalizes shopping experiences by analyzing user behavior and
            recommending products based on preferences.
          </p>
          <h3 className="text-lg font-semibold  mb-2">Education</h3>
          <p className="text-base  mb-4">
            AI-driven platforms offer personalized learning experiences, helping
            students grasp concepts at their own pace.
          </p>
          <h3 className="text-lg font-semibold  mb-2">Autonomous Vehicles</h3>
          <p className="text-base  mb-4">
            Self-driving cars, powered by AI, are set to revolutionize
            transportation by reducing human error and traffic accidents.
          </p>
          <h2 className="text-2xl font-semibold  mb-3">
            The Ethical Debate: Is AI a Threat?
          </h2>
          <p className="text-base  mb-4">
            Despite its benefits, AI raises ethical concerns like job
            displacement, bias and fairness, and privacy issues. Responsible AI
            development and ethical considerations are necessary to ensure its
            positive impact.
          </p>
          <h2 className="text-2xl font-semibold  mb-3">The Future of AI</h2>
          <p className="text-base  mb-4">
            As AI continues to evolve, it is expected to bring advancements such
            as AI-generated content, quantum computing, and AI-driven solutions
            for global challenges like climate change and disease prevention.
          </p>
          <h2 className="text-2xl font-semibold  mb-3">Conclusion</h2>
          <p className="text-base  leading-relaxed">
            AI is already shaping our present and will continue to define the
            future of technology and humanity. Embracing it responsibly will
            ensure a balanced and positive impact on society.
          </p>`,
    },
    {
      id: "002",
      time: "2-Feb-2025",
      tag: "Economy",
      image: BudgetImg,
      title: "India's Union Budget 2025-26: An In-Depth Overview",
      description: `<p className="text-base  mb-4">On February 1, 2025, India's Finance Minister Nirmala Sitharaman presented the Union Budget for the fiscal year 2025-26. The budget focuses on driving economic growth, reducing the fiscal deficit, and addressing concerns of the middle className with significant tax reforms and incentives.</p>
        <h2 className="text-2xl font-semibold  mb-3">Key Highlights</h2>
        <h3 className="text-lg font-semibold  mb-2">1. Income Tax Revisions</h3>
        <p className="text-base  mb-4">The government has introduced changes to the income tax structure. The personal income tax threshold has been raised to ₹12 lakh (approximately $14,800), aiming to encourage savings and increase disposable income among the middle className.</p>
        <h3 className="text-lg font-semibold  mb-2">2. Agricultural Initiatives</h3>
        <p className="text-base  mb-4">In a bid to strengthen the agricultural sector, the government has launched a high-yield crop program targeting 17 million farmers. Additionally, the budget allocates enhanced subsidized credit to farmers to improve productivity and reduce financial strain.</p>
        <h3 className="text-lg font-semibold  mb-2">3. Support for Gig Economy Workers</h3>
        <p className="text-base  mb-4">The budget proposes formalizing the gig economy by introducing policies aimed at improving access to healthcare and welfare benefits for gig workers, further enhancing their social security.</p>
        <h3 className="text-lg font-semibold  mb-2">4. Infrastructure and Energy Investments</h3>
        <p className="text-base  mb-4">Major investments have been earmarked for infrastructure development, including roads, railways, and airports. Additionally, a Nuclear Energy Mission was announced to generate 100 GW of nuclear power by 2047, further boosting energy security.</p>
        <h3 className="text-lg font-semibold  mb-2">5. Subsidies and Welfare Programs</h3>
        <p className="text-base  mb-4">Allocations for welfare schemes like food, fertilizers, and rural employment subsidies have been maintained at ₹4 lakh crore. The government continues its focus on ensuring the welfare of vulnerable sections of society.</p>
        <h2 className="text-2xl font-semibold  mb-3">Conclusion</h2>
        <p className="text-base  leading-relaxed">The Union Budget 2025-26 represents a balanced approach to spurring growth, boosting welfare, and securing India’s future. With substantial investments in infrastructure, agriculture, and social welfare, the budget aims to create a more inclusive and resilient economy.</p>`,
    },
    {
      id: "003",
      time: "2-Feb-2025",
      tag: "Sports",
      image: WomensCricketImg,
      title:
        "India Clinches Back-to-Back Women's Under-19 T20 World Cup Titles",
      description: `<p className="text-base  mb-4">
            India's women's Under-19 cricket team has achieved a remarkable feat
            by winning their second consecutive T20 World Cup title. In the
            final against South Africa, India secured a nine-wicket victory,
            with opener G Trisha playing a pivotal role. Trisha's all-round
            performance included a stellar bowling figure of 3-15, followed by
            an unbeaten 44 runs, leading India to a commanding win.
          </p>
          <p className="text-base  mb-4">
            This victory underscores India's growing dominance in women's
            cricket and highlights the depth of talent emerging from their youth
            development programs. The team's consistent performance in the
            tournament reflects a bright future for Indian women's cricket on
            the global stage.
          </p>`,
    },
  ];

  return (
    <>
      <div classNameName="px-6 md:px-16 py-12 flex flex-col items-center justify-center">
        <div classNameName="flex gap-5 items-center md:w-[80%]">
          <p classNameName="bg-primary text-white text-lg px-3 py-1 rounded-lg">
            Technology
          </p>
          <p>12-feb-2025</p>
        </div>
        <div classNameName="py-10 md:w-[80%]">
          <p classNameName="text-5xl font-semibold">
            The Rise of AI: Transforming the Future of Technology
          </p>
        </div>
        <div classNameName=" w-full md:w-[80%]">
          <img src={AiImg} classNameName="rounded-3xl" alt="" />
        </div>
        <div classNameName="py-10 md:w-[80%]">
          <p className="text-base  mb-4">
            On February 1, 2025, India's Finance Minister Nirmala Sitharaman
            presented the Union Budget for the fiscal year 2025-26. The budget
            focuses on driving economic growth, reducing the fiscal deficit, and
            addressing concerns of the middle class with significant tax reforms
            and incentives.
          </p>
          <h2 className="text-2xl font-semibold  mb-3">Key Highlights</h2>
          <h3 className="text-lg font-semibold  mb-2">
            1. Income Tax Revisions
          </h3>
          <p className="text-base  mb-4">
            The government has introduced changes to the income tax structure.
            The personal income tax threshold has been raised to ₹12 lakh
            (approximately $14,800), aiming to encourage savings and increase
            disposable income among the middle class.
          </p>
          <h3 className="text-lg font-semibold  mb-2">
            2. Agricultural Initiatives
          </h3>
          <p className="text-base  mb-4">
            In a bid to strengthen the agricultural sector, the government has
            launched a high-yield crop program targeting 17 million farmers.
            Additionally, the budget allocates enhanced subsidized credit to
            farmers to improve productivity and reduce financial strain.
          </p>
          <h3 className="text-lg font-semibold  mb-2">
            3. Support for Gig Economy Workers
          </h3>
          <p className="text-base  mb-4">
            The budget proposes formalizing the gig economy by introducing
            policies aimed at improving access to healthcare and welfare
            benefits for gig workers, further enhancing their social security.
          </p>
          <h3 className="text-lg font-semibold  mb-2">
            4. Infrastructure and Energy Investments
          </h3>
          <p className="text-base  mb-4">
            Major investments have been earmarked for infrastructure
            development, including roads, railways, and airports. Additionally,
            a Nuclear Energy Mission was announced to generate 100 GW of nuclear
            power by 2047, further boosting energy security.
          </p>
          <h3 className="text-lg font-semibold  mb-2">
            5. Subsidies and Welfare Programs
          </h3>
          <p className="text-base  mb-4">
            Allocations for welfare schemes like food, fertilizers, and rural
            employment subsidies have been maintained at ₹4 lakh crore. The
            government continues its focus on ensuring the welfare of vulnerable
            sections of society.
          </p>
          <h2 className="text-2xl font-semibold  mb-3">Conclusion</h2>
          <p className="text-base  leading-relaxed">
            The Union Budget 2025-26 represents a balanced approach to spurring
            growth, boosting welfare, and securing India’s future. With
            substantial investments in infrastructure, agriculture, and social
            welfare, the budget aims to create a more inclusive and resilient
            economy.
          </p>
        </div>
      </div>
    </>
  );
}

export default Featuredpost;
