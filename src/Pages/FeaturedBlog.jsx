import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AiImg from "../assets/ai.jpg";
import WomensCricketImg from "../assets/womens-cricket.png";
import BudgetImg from "../assets/budget.png";
import FeaturedBlogComp from "../Components/FeaturedBlogComp";
import VRBlogImg from "../assets/vr-blog.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function FeaturedBlog() {
  const { id } = useParams();
  const [featuredBlog, setFeaturedBlog] = useState();
  const featuredPosts = [
    {
      id: "001",
      date: "2-Feb-2025",
      tag: "Technology",
      image: AiImg,
      title: "The Rise of AI: Transforming the Future of Technology",
      description: (
        <>
          {" "}
          <p className="text-base  mb-4">
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
          </p>{" "}
        </>
      ),
    },
    {
      id: "002",
      date: "2-Feb-2025",
      tag: "Economy",
      image: BudgetImg,
      title: "India's Union Budget 2025-26: An In-Depth Overview",
      description: (
        <>
          <p className="text-base  mb-4">
            On February 1, 2025, India's Finance Minister Nirmala Sitharaman
            presented the Union Budget for the fiscal year 2025-26. The budget
            focuses on driving economic growth, reducing the fiscal deficit, and
            addressing concerns of the middle className with significant tax
            reforms and incentives.
          </p>
          <h2 className="text-2xl font-semibold  mb-3">Key Highlights</h2>
          <h3 className="text-lg font-semibold  mb-2">
            1. Income Tax Revisions
          </h3>
          <p className="text-base  mb-4">
            The government has introduced changes to the income tax structure.
            The personal income tax threshold has been raised to ₹12 lakh
            (approximately $14,800), aiming to encourage savings and increase
            disposable income among the middle className.
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
        </>
      ),
    },
    {
      id: "003",
      date: "2-Feb-2025",
      tag: "Sports",
      image: WomensCricketImg,
      title:
        "India Clinches Back-to-Back Women's Under-19 T20 World Cup Titles",
      description: (
        <>
          {" "}
          <p className="text-base  mb-4">
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
          </p>{" "}
        </>
      ),
    },
    {
      id: "004",
      date: "2-Feb-2025",
      tag: "Technology",
      image: VRBlogImg,
      title:
        "How to make a Game look more attractive with New VR & AI Technology",
      description: (
        <>
          <p className="text-base/7 mb-5 ">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <p className="text-base/7 mb-5 ">
            We’re now at a pivotal moment in our AI journey. Breakthroughs in
            generative AI are fundamentally changing how people interact with
            technology — and at Google, we’ve been responsibly developing large
            language models so we can safely bring them to our products. Today,
            we’re excited to share our early progress. Developers and businesses
            can now try new APIs and products that make it easy, safe and
            scalable to start building with Google’s best AI models through
            Google Cloud and a new prototyping environment called MakerSuite.
            And in Google Workspace, we’re introducing new features that help
            people harness the power of generative AI to create, connect and
            collaborate.
          </p>
          <p className="text-base/7 my-9 px-5 border-l-8 border-primary ">
            “People worry that computers will get too smart and take over the
            world, but the real problem is that they’re too stupid and they’ve
            already taken over the world.”
            <span className="ms-5 font-semibold">– Pedro Domingos</span>
          </p>
          <p className="text-base/7 mb-5 ">
            More than 3 billion people already benefit from AI-powered features
            in Google Workspace, whether it’s using Smart Compose in Gmail or
            auto-generated summaries in Google Docs. Now, we’re excited to take
            the next step and bring a limited set of trusted testers a new set
            of features that makes the process of writing even easier. In Gmail
            and Google Docs, you can simply type in a topic you’d like to write
            about, and a draft will be instantly generated for you. So if you’re
            a manager onboarding a new employee, Workspace saves you the time
            and effort involved in writing that first welcome email. From there,
            you can elaborate upon or abbreviate the message or adjust the tone
            to be more playful or professional — all in just a few clicks. We’ll
            be rolling out these new experiences to testers in the coming weeks.
          </p>
          <p className="text-base/7 mb-5 ">
            We’re so excited by the potential of generative AI, and the
            opportunities it will unlock — from helping people express
            themselves creatively, to helping developers build brand new types
            of applications, to transforming how businesses and governments
            engage their customers and constituents. Stay tuned for more to come
            in the weeks and months ahead.
          </p>
        </>
      ),
    },
  ];

  useEffect(() => {
    featuredPosts.find((post) => {
      if (post.id == id) {
        setFeaturedBlog(post);
      } else {
        return null;
      }
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      {featuredBlog ? (
        <FeaturedBlogComp
          title={featuredBlog.title}
          description={featuredBlog.description}
          tag={featuredBlog.tag}
          date={featuredBlog.date}
          image={featuredBlog.image}
        />
      ) : (
        <div className="text-center py-20 text-4xl font-semibold">
          Blog is currently not available...!
        </div>
      )}

      <Footer />
    </div>
  );
}

export default FeaturedBlog;
