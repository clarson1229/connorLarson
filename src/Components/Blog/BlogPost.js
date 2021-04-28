import React, { Component } from 'react';
import "../../css/layout.css";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPost = () => {
  const picData = useStaticQuery(graphql`
    {
        file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "tree.png" }
        ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
          }
        }
        }
    }
  `);
  const actualDefense = <div>
    <span>Now with some context stated, I will get into actual AI applications being used today. AI not only has the power to make future breakthroughs in cyber security, it already is providing the industry a great benefit as Stevens in his paper states  “61% of [enterprises] reported in 2019 that they could not detect network breaches without AI technologies and 69% believed AI would be necessary to respond to those breaches” (Stevens, T. 2020). This number will only continue to grow as time goes on and even better approaches are developed. That being said it’s no shock the biggest area where AI systems can be found today are in “intrusion detection systems” (Zeadally, S. et al, 2020). These are the systems very good candidates for AI techniques because the key to finding an intrusion comes in being able to recognize patterns in normal operation versus when a system is under attack. The biggest power of AI algorithms is to discover and then recognize patterns from large amounts of data. This task is also extremely tedious and boring for humans to do which lends to the motivation to have AI systems do the work instead. On top of that, algorithms do not get tired and thus can work 24/7 without breaks unlike humans. The four types of intrusion detection systems are signature based, anomaly based, hybrid, and stateful protocol (Sarker, I. H. et al. 2021). The signature based approach to detection uses a knowledge database of previous attack signatures and compares new incoming data to those attacks, raising alarm when it finds a match. The anomaly based approach learns a baseline for normal operation and is able to then raise alarm when it detects an anomaly in the data. Because of “new types of polymorphic and metamorphic malware, which change their ‘appearance’ every few seconds” (Stevens, T. 2020) to avoid detection the industry today is switching to an anomaly based approach. The old way of detecting an attack based on previous data is becoming obsolete.  The hybrid approach as one can imagine uses both methods to make a robust system able to match to old attacks and recognize new unseen anomalies. The stateful protocol analysis takes the anomaly based approach one step further and defines not just one baseline but many states of operation that can then raise alarm if activity deviates from them (Sarker, I. H. et al. 2021).  As systems today improve they are logging more and more data points.This data sits at the core of the cyber security industry’s need to function (Stevens, T. 2020). Through analysis of this data, either the old way by human or the new way by machine, experts are able to learn and make defensive adjustments to systems. Turning to specific algorithms, decision trees use a rule based approach to “classif[y] network traffic” (Zeadally, S. et al, 2020). The figure below shows how these rules can form a tree like structure.</span>
    <div className="treeWrappers">
    <Img
            fluid={picData.file.childImageSharp.fluid}
            alt="tree"
            className="tree-pic"
            imgStyle={{ objectFit: "contain" }}
            /></div>
    <span> This structure can be especially useful in detecting denial of service attacks where attackers repeatedly ping a server with thousands of requests in a short window of time causing the system to slow and even shut down. By having an algorithm able to classify traffic from one IP address as an attack, the system can block traffic and thus avoid a total shut down. Another good feature of this algorithm is the rules can be learned by the system itself instead of by humans telling the system the rules. By feeding the algorithm data from when a system was under attack it can learn to build rules to then build the tree. Support vector machines (SVM) can also be used like decision trees to differentiate internet traffic. Developers can simulate an attack on a network and then use the generated data to train the SVM models to learn what bad internet traffic looks like. They have also been used to detect phishing links by analysing a number of features from the links. Neural networks have also been trained in ddos detection. Their greatest benefit is they have the ability to continually learn as new data from attacks comes available making them highly resilient. A form of neural networks called self organizing maps are very good at creating detailed visualizations of complex data. These visualizations allow for easier anomaly detection (Zeadally, S. et al, 2020). Now turning to the areas using these techniques, Samtani, S. et al in their paper state four areas with the most AI use. The cyber threat intelligence area is focused on identifying new attacks and new attackers. The disinformation and computational propaganda area focuses on how false information is transmitted through the internet. Security operations centers are tasked with monitoring the key information technology and information systems which companies require to operate. Adversarial machine learning is a class of machine learning algorithms which generate fake input data in an attempt to trick the classification algorithm. These are highly versatile and can be trained to do numerous tasks (Samtani, S. et al, 2020). All four of these areas have all of the qualities where AI can thrive starting with large amounts of data.</span>
  </div>
  const subDefense = [
    {
      'subtitle':"History of AI in Cyber Security", 
      'body': "Sarker, I. H. and the other authors on the paper claim “Artificial intelligence is one of the key technologies of the Fourth Industrial Revolution” (Sarker, I. H. et al, 2021). This is no small statement to be making and from additional research I would have to agree with them. Abbas, N. N. and the other authors of another paper sought to understand this by looking at the history of AI specifically in the field of cyber security by analysis of published scholarly works. They choose papers by ones which had a combination of AI and cyber security buzzwords. Their work concluded the first major paper on the topic was written in 2005 and really began to be highly cited in 2007. The authors claim this is the critical point in AI research as most papers gained their inspiration from it. After this period there was an explosion of research on the AI in cyber security which is still continuing today. Data mining, cryptography, and intrusion detection were found to be the first specific topics in AI researched with the earliest papers. This early research made a significant impact on the industry as the most widely used application for AI in the industry today is for monitoring for intrusion detection. I will talk more about this later in the post. The research topics then shifted to “neural networks” and “patterns” to “face recognition” and “social networks”. The research today is still following this trend. A very interesting fact is the buzzword which has stayed the longest in all the research was “United States.” The authors attributed this to the fact “that 22.5% of all hacking attacks come from within the United States” and that “Almost 27 million Americans had their identities stolen in the last 5 years” (Abbas, N. N. et al, 2019 ). With so many attacks against the United states it makes sense why there is so much research is being done here. The data backs this claim up again as the United states is the “largest contributor” of research publications (Abbas, N. N. et al, 2019 ) of all the countries with China in second place. This understanding is helpful to see where AI research started and gives some context for why it is exploding in the professional industry of defense. "
    },{
      'subtitle':"Actual Approaches", 
      // 'body': actualDefense
      'body': "Now with some context stated, I will get into actual AI applications being used today. AI not only has the power to make future breakthroughs in cyber security, it already is providing the industry a great benefit as Stevens in his paper states  “61% of [enterprises] reported in 2019 that they could not detect network breaches without AI technologies and 69% believed AI would be necessary to respond to those breaches” (Stevens, T. 2020). This number will only continue to grow as time goes on and even better approaches are developed. That being said it’s no shock the biggest area where AI systems can be found today are in “intrusion detection systems” (Zeadally, S. et al, 2020). These are the systems very good candidates for AI techniques because the key to finding an intrusion comes in being able to recognize patterns in normal operation versus when a system is under attack. The biggest power of AI algorithms is to discover and then recognize patterns from large amounts of data. This task is also extremely tedious and boring for humans to do which lends to the motivation to have AI systems do the work instead. On top of that, algorithms do not get tired and thus can work 24/7 without breaks unlike humans. The four types of intrusion detection systems are signature based, anomaly based, hybrid, and stateful protocol (Sarker, I. H. et al. 2021). The signature based approach to detection uses a knowledge database of previous attack signatures and compares new incoming data to those attacks, raising alarm when it finds a match. The anomaly based approach learns a baseline for normal operation and is able to then raise alarm when it detects an anomaly in the data. Because of “new types of polymorphic and metamorphic malware, which change their ‘appearance’ every few seconds” (Stevens, T. 2020) to avoid detection the industry today is switching to an anomaly based approach. The old way of detecting an attack based on previous data is becoming obsolete.  The hybrid approach as one can imagine uses both methods to make a robust system able to match to old attacks and recognize new unseen anomalies. The stateful protocol analysis takes the anomaly based approach one step further and defines not just one baseline but many states of operation that can then raise alarm if activity deviates from them (Sarker, I. H. et al. 2021).  As systems today improve they are logging more and more data points.This data sits at the core of the cyber security industry’s need to function (Stevens, T. 2020). Through analysis of this data, either the old way by human or the new way by machine, experts are able to learn and make defensive adjustments to systems. Turning to specific algorithms, decision trees use a rule based approach to “classif[y] network traffic” (Zeadally, S. et al, 2020). This structure can be especially useful in detecting denial of service attacks where attackers repeatedly ping a server with thousands of requests in a short window of time causing the system to slow and even shut down. By having an algorithm able to classify traffic from one IP address as an attack, the system can block traffic and thus avoid a total shut down. Another good feature of this algorithm is the rules can be learned by the system itself instead of by humans telling the system the rules. By feeding the algorithm data from when a system was under attack it can learn to build rules to then build the tree. Support vector machines (SVM) can also be used like decision trees to differentiate internet traffic. Developers can simulate an attack on a network and then use the generated data to train the SVM models to learn what bad internet traffic looks like. They have also been used to detect phishing links by analysing a number of features from the links. Neural networks have also been trained in ddos detection. Their greatest benefit is they have the ability to continually learn as new data from attacks comes available making them highly resilient. A form of neural networks called self organizing maps are very good at creating detailed visualizations of complex data. These visualizations allow for easier anomaly detection (Zeadally, S. et al, 2020). Now turning to the areas using these techniques, Samtani, S. et al in their paper state four areas with the most AI use. The cyber threat intelligence area is focused on identifying new attacks and new attackers. The disinformation and computational propaganda area focuses on how false information is transmitted through the internet. Security operations centers are tasked with monitoring the key information technology and information systems which companies require to operate. Adversarial machine learning is a class of machine learning algorithms which generate fake input data in an attempt to trick the classification algorithm. These are highly versatile and can be trained to do numerous tasks (Samtani, S. et al, 2020). All four of these areas have all of the qualities where AI can thrive starting with large amounts of data."
    }
  ]
  var subDefenseSection = subDefense.map(function(data){
    return (
    <div key={data.subtitle}>
      <h3>{data.subtitle}</h3>
      <p >{data.body} </p>
    </div>)
  });
  var sourcesData = [
    {
      "source":"Abbas, N. N., Ahmed, T., Shah, S. H., Omar, M., & Park, H. W. (2019). Investigating the applications of artificial intelligence in cyber security. Scientometrics, 121(2), 1189-1211. doi:10.1007/s11192-019-03222-9"
    },
    {
      "source":"Chen, C., Quan, W., Cheng, N., Yu, S., Lee, J., Perez, G. M., . . . Shieh, S. (2020). IEEE Access Special Section Editorial: Artificial Intelligence in Cybersecurity. IEEE Access, 8, 163329-163333. doi:10.1109/access.2020.3021604"
    },
    {
      "source":"Kaloudi, N., & Li, J. (2020). The AI-Based Cyber Threat Landscape. ACM Computing Surveys, 53(1), 1-34. doi:10.1145/3372823"
    },
    {
      "source":"Samtani, S., Kantarcioglu, M., & Chen, H. (2020). Trailblazing the Artificial Intelligence for Cybersecurity Discipline. ACM Transactions on Management Information Systems, 11(4), 1-19. doi:10.1145/3430360"
    },
    {
      "source":"Sarker, I. H., Furhad, M. H., & Nowrozy, R. (2021). AI-Driven Cybersecurity: An Overview, Security Intelligence Modeling and Research Directions. SN Computer Science, 2(3). doi:10.1007/s42979-021-00557-0"
    },
    {
      "source":"Stevens, T. (2020). Knowledge in the grey zone: AI and cybersecurity. Digital War, 1(1-3), 164-170. doi:10.1057/s42984-020-00007-w"
    },
    {
      "source":"Taddeo, M., Mccutcheon, T., & Floridi, L. (2019). Trusting artificial intelligence in cybersecurity is a double-edged sword. Nature Machine Intelligence, 1(12), 557-560. doi:10.1038/s42256-019-0109-1"
    },
    {
      "source":"Zeadally, S., Adi, E., Baig, Z., & Khan, I. A. (2020). Harnessing Artificial Intelligence Capabilities to Improve Cybersecurity. IEEE Access, 8, 23817-23837. doi:10.1109/access.2020.2968045"
    }
  ]
  var subSourcesSection = sourcesData.map(function(data){
    return (
      <div key={data.source} className="sourcesDiv">
        <p className="sources">{data.source} </p>
      </div>
    )
  });
  const readingsData = [
    {
      "title": "“Harnessing artificial intelligence capabilities to improve cybersecurity,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8963730"
    },{
      "title": "“Classification hardness for supervised learners on 20 years of intrusion detection data,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8901110"
    },{
      "title": "“An optimization method for intrusion detection classification model based on deep belief network,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8751965"
    },{
      "title": "“An adaptive ensemble machine learning model for intrusion detection,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8740962"
    },{
      "title": "“Performance evaluation of a combined anomaly detection platform,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8771247"
    },{
      "title": "“SMASH: A malware detection method based on multi-feature ensemble learning,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8792043"
    },{
      "title": "“Machine learning based file entropy analysis for ransomware detection in backup systems,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8772046"
    },{
      "title": "“An empirical evaluation of deep learning for network anomaly detection,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8846674"
    },{
      "title": "“Cyber threat detection based on artificial neural networks using event profiles,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8896978"
    },{
      "title": "“Abnormal behavior detection scheme of UAV using recurrent neural networks,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8793200"
    },{
      "title": "“Securing data with blockchain and AI,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8733072"
    },{
      "title": "“Smart contract-based secure model for miner registration and block validation,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8830346"
    },{
      "title": "“APDP: Attack-proof personalized differential privacy model for a smart home,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8896955"
    },{
      "title": "“Latent-space-level image anonymization with adversarial protector networks,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8744221"
    },{
      "title": "“A machine learning framework for biometric authentication using electrocardiogram,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8756039"
    },{
      "title": "“Certificateless deniable authenticated encryption for location-based privacy protection,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8772052"
    },{
      "title": "“In-air gesture interaction: Real time hand posture recognition using passive RFID tags,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8760239"
    },{
      "title": "“An enhanced electrocardiogram biometric authentication system using machine learning,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8812730"
    },{
      "title": "“Learning based adaptive network immune mechanism to defense eavesdropping attacks,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8918023"
    },{
      "title": "“Technical mapping of the grooming anatomy using machine learning paradigms: An information security approach,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8845626"
    },{
      "title": "“BiN: A two-level learning-based bug search for cross-architecture binary,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8920168"
    },{
      "title": "“DeepTAL: Deep learning for TDOA-based asynchronous localization security with measurement error and missing data,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8817921"
    },{
      "title": "“Blog reliability analysis with conflicting interests of contexts in the extended branch for cyber-security,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8843866"
    },{
      "title": "“Sina weibo bursty event detection method,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8892555"
    },{
      "title": "“Visualize your IP-over-optical network in realtime: A P4-based flexible multilayer in-band network telemetry (ML-INT) system,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8743481"
    },{
      "title": "“Steganalysis of AMR speech based on multiple classifiers combination,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8847406"
    },{
      "title": "“A Q-learning based scheme to securely cache content in edge-enabled heterogeneous networks,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8862859"
    },{
      "title": "“A rerouting framework against routing interruption for secure network management,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8861071"
    },{
      "title": "“Ontology-based security context reasoning for power IoT-cloud security service,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8792053"
    },{
      "title": "“AID shuffling mechanism based on group-buying auction for identifier network security,”", 
      "link" : "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8805071"
    }  

  ]
  const furtherReadingText = "The following list of recently written papers about the use of AI in the cyber security industry. These 30 articles were selected to be featured in a special editorial of IEEE. The special edition was written by Chi-Yuan Chen and 7 other authors, where they breakup the 30 papers into 3 categories. I have taken the titles of all 30 articles and added links to the papers for those who would like a more technical dive of how AI is being used in the industry today. (Chen, C. et al , 2020)"
  
  var readingTable = <div>
      <p>{furtherReadingText}</p>
      <table className="readingTable">
        { readingsData.map(function(data){
          return(
            <tr className="rRow" key={data.title}>
              <th className="atitle">{data.title}</th>
              <th className="link"><a  target="_blank" href={data.link}>Link</a></th>
            </tr>
          )
        })}
      </table>
    </div>
  
  const sectionData = [
    {
      "title": "Intro",
      "words" : "The cyber landscape we face today is ever evolving with hackers pioneering new ways to wreck havoc and cyber security experts trying to stop them. So much so “global cybersecurity spending is expected to exceed $1 trillion from 2017 to 2021 ”(Zeadally et al, 2020). One trillion is no small number but it pales in comparison to the cost of attacks which are estimated to be  “more than $5 trillion in 2024” (Zeadally et al, 2020). These two figures show there is going to be a lot of growth in the cyber industry in the feature. This potential future growth coupled with the fact that I am getting a master’s degree in computer science with my emphasis in intelligent systems motivated me to want to know how artificial intelligence fits into this industry’s growth. Half of me wanted to know if this was a field I potentially wanted to work in and the other half was pure fascination with the artificial intelligence field and wanting to learn more. With my research question set on determining where and how artificial intelligence is utilized in the cyber security industry, I started looking for scholar articles to answer that question. This blog post will first give definitions of key terms to give the reader some understanding before getting into the actual applications for cyber security. Next it will go over the history of Artificial intelligence in the industry to then give actual examples of how it is used. After I will go into how it can be used not just in defense but also as an attack tool. I will then go into some ethical issues which come with putting trust in these systems. Finally I will close out the post by giving some additional resources for those looking for further technical papers on the recent advances going on in the industry. ", 
    }, {
      "title": "What is Artificial intelligence?",
      "words" : "Artificial intelligence (AI) is defined as a software program or algorithm able to learn and make decisions based on the learning. The goal being to make these algorithms able to do tasks that before could only be done by humans. Two examples are classification and image recognition softwares. AI is the broad overview term encompassing many specific methods with the main one being machine learning and neural networks being other. Machine learning is the actual term used to describe the algorithms in use today. These algorithms can be trained either supervised, semi supervised, or unsupervised. Supervised learning is when the algorithm is trained on input data which has an attached output which is the correct classification value. Unsupervised learning is when the algorithm is fed unlabeled data and it is tasked to learn labels from it. As you can imagine semi-supervised is a hybrid approach. One of the most basic algorithms is called linear regression where the algorithm uses mathematical weights to try to find the correct classification or prediction for inputs fed into it. This algorithm like most machine learning (ML) algorithms uses a loss function to update those weights until it achieves one hundred percent accuracy or some threshold of correctness. Support vector machines (SVM) are algorithms which take this concept to the next level by use of kernel functions to allow them to classify data that is not linearly separable making them highly versatile. Decision trees are another family of algorithms which utilize a rule based approach to determine the correct classification. The rules are either given to the network or the rules are learned as new data comes in. Neural networks utilize the basic idea of linear regression and add that to many middle layers where each layer is capable of learning a small part of the bigger problem (Zeadally et al, 2020). The study of neural networks is exploding as they are highly capable of drawing patterns from complex data. The key to their success is the ability to utilize immense computing power and with the advent of new technology they have already had proven results with even more promise to come as time goes on.", 
    }, {
      "title": "Artificial intelligence as a defense.",
      "words" : subDefenseSection, 
    }, {
      "title": "The power of AI as a Weapon?",
      "words" : "With systems today producing so much data AI techniques are becoming stronger and more widely used. I have shown the uses in defense but the same techniques can be used by hackers as an attack on systems. This is becoming more of a threat today because of the “increasing levels of interconnectivity” (Kaloudi, N. & Li, J., 2020) among devices. This is especially true for internet of things devices. In this new scene hackers can capitalize on the vulnerabilities of one device and now gain access to the whole system. Now take this interconnectivity of devices and add in a highly advanced smart attack malware that can make decisions on the fly to avoid detection and you have a recipe for disaster. Thankfully all of this research is theoretical but it will not be for long. Past research of bad AI has focused on how “AI can be attacked by criminals” (Kaloudi, N. & Li, J., 2020). This is where bad actors give an AI a bias or somehow mess with a system so  it makes a misclassification. This current research changes the focus to how AI can be used as an active attack vector. The authors Kaloudi, N. & Li, J. state the current AI attacks being researched. “DeepLocker” is a malware using a neural network to avoid detection. This malware even uses AI to learn where the most vulnerable place is to attack to cause the most damage. The next attack they highlight is a voice synthesis attack where attackers mimic the user's voice to trick a system to unlock it. Another attack is a password attack where a generative adversarial network was used to create new passwords from past known ones. This method had greater success than older methods which only used password databases. The next category of attacks they highlight are intelligent bots nets. The two they mention are “Snap_r” and “DeepPhish”. Each system is able to learn from its environment and make intelligent decisions from it. The final area of research they talk about is AI malware that can beat AI powered defense systems. The three malwares are “Malgan”, “DeepDGA”, and “DeepHack”.  Malgan and DeepDGA both use genetic adversarial networks to generate attacks based on prior attacks but with slight noise added. Each of these are able to beat the AI detection models. DeepHack uses reinforcement learning to learn SQL queries syntax to break website databases (Kaloudi, N. & Li, J., 2020). All of these thankfully have only been seen in a laboratory setting but they sit as a proof of concept meaning we might see them in the real world at some point. In a world of super interconnectivity the authors pose a scenario where this could happen. The perfect area where this would work is in a smart city with thousands of internet of things devices, even connected to physical utilities. Attackers could use AI methods to learn as much information as they can about the smart city environment and what systems are the best targets to attack. Then use AI to determine the best timing of when an attack will cause the most amount of damage. By then using AI methods to craft a phishing campaign they can send the malware payload. Once the payload is sent the malware could use AI methods to install itself posing as something else hiding its true intention.  Once it finally receives coded commands to activate it will then already be inside critical systems and the damage could be tremendous (Kaloudi, N. & Li, J., 2020). While all of this is theoretical it is not outside the realm of possibility. Each part of the attack plan has had working proof in a lab. The scary part will come when a bad actor finally uses all the parts and carries out an attack such as this one.", 
    }, {
      "title": "Misguided Trust in AI?",
      "words" : "I mentioned briefly above about the possibility of a bad actor being able to infect an AI system and cause it to make misclassifications. This has the possibility to cause disastrous outcomes as shown in a study that “by adding 8% of erroneous data to an AI system for drug dosage, attackers could cause a 75.06% change of the dosages for half of the patients relying on the system for their treatment” (Taddeo, M., 2019). Thankfully this has not happened. But the possibility exists, a bad actor can get into a system unnoticed and change things in the network. As seen by the mentioned study hackers only need to minimally change a system to cause bad outcomes.  That being said “it may be difficult to understand when the compromised system is showing some ‘wrong’ behaviour” (Taddeo, M., 2019) this is because a lot of these systems operate on a black box concept where input data comes in and output goes out. There is very little understanding of what goes on inside the black box. There needs to be greater understanding and education of how these systems work. One solution posed was that “AI-based approaches should be closely linked with human action”  (Samtani, S., 2020). This way there is not so much reliance on the system and in case something does go wrong there is a human actor that must approve a decision before it happens. Another posed solution was to run a clone of the same AI system in an isolated environment creating a baseline to compare the system running in the real world. (Taddeo, M., 2019) This would allow users to know when a system has deviated too far outside the norm and is making incorrect classifications. It does not however fix the blackbox issue but at least provides some safeguards. In the end AI does have the power to transform the cyber landscape and create robust defense systems. But this development must be done carefully and thoroughly tested. Then after it is deployed it must be monitored 24/7 to ensure proper operation. ", 
    }, {
      "title": "Further Reading",
      "words" : readingTable, 
    }, {
      "title": "Sources",
      "words" : subSourcesSection,
    }, 
  ]
  
  var subSections = sectionData.map(function(data){
    return (
      <div key={data.title} className="row subSection">
        <div className="three columns header-col">
            <h1><span>{data.title}</span></h1>
        </div>

        <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {data.words}
              </div>
            </div>
        </div>
      </div>
    )
  });
  
  return(
    <section id="Blog">
        <h1 className="Title">Artificial Intelligence in Cyber Security</h1>
        {subSections}
    </section>
  )
}
export default BlogPost;
