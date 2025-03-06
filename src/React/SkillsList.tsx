import React, {useState} from "react";

const CategoryIcons = {
    "Backend Development": (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[var(--sec)] opacity-70"
        >
            <path
                d="M21.254 17.528A4.165 4.165 0 0 0 17.094 14a4.22 4.22 0 0 0-3.685 2.137 1.717 1.717 0 0 0-.534-.092 1.67 1.67 0 0 0-1.556 1.04A2.996 2.996 0 0 0 12 23h8.018A2.918 2.918 0 0 0 23 20.136a2.858 2.858 0 0 0-1.746-2.608zM19.994 22h-7.54l-.46-.003a1.995 1.995 0 0 1-.448-3.938l.506-.118.195-.481a.67.67 0 0 1 .628-.415.734.734 0 0 1 .225.043l.777.252.402-.711A3.231 3.231 0 0 1 17.094 15a3.18 3.18 0 0 1 3.17 2.67l.08.552.51.223A1.863 1.863 0 0 1 22 20.137 1.916 1.916 0 0 1 19.995 22zM11.5 2C6.78 2 2 3.03 2 5v12.58c0 1.64 2.676 2.695 6 3.123v-1.006c-3.16-.426-5-1.381-5-2.118v-6.248C4.643 12.429 8.082 13 11.5 13s6.857-.57 8.5-1.67v2.568a5.22 5.22 0 0 1 1 .856V5c0-1.97-4.78-3-9.5-3zM20 9.848C20 10.726 16.689 12 11.5 12S3 10.726 3 9.848V6.41C4.643 7.457 8.082 8 11.5 8s6.857-.543 8.5-1.589zM11.5 7C6 7 3 5.679 3 5s3-2 8.5-2S20 4.321 20 5s-3 2-8.5 2z"/>
        </svg>
    ),
    "Frontend Development": (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[var(--sec)] opacity-70"
        >
            <path
                d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
        </svg>
    ),
    "DevOps & Infrastructure": (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[var(--sec)] opacity-70"
        >
            <path
                d="M13 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17"
                stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path
                d="M11 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H7"
                stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11 6H18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6 6H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11 17H18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6 17H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    ),
};

const SkillsList = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const skills = {
        "Backend Development": [
            "Java Spring (Boot, Security, Data, Cloud)",
            "Microservice architecture",
            "Kafka for asynchronous communication",
            "API Gateway (Spring Cloud Gateway)",
            "OAuth2, Keycloak",
            "PostgreSQL, Liquibase, Caffeine Cache",
            "Redis and caching",
            "SQL query optimization",
            "Transactions and error handling (RetryTemplate)",
            "Docker, containerization, CI/CD",
        ],
        "Frontend Development": [
            "Next.js, Astro",
            "React (Tailwind CSS, ShadCN/UI)",
            "Responsive UI development",
            "API integrations (GraphQL, REST)",
            "UI performance optimization",
        ],
        "DevOps & Infrastructure": [
            "VPS, Docker, Docker Compose",
            "Nginx, Traefik",
            "CI/CD pipelines",
            "Monitoring and logging (SLF4J, Prometheus, Grafana)",
        ],
    };


    const toggleItem = (item: string) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <div className="text-left pt-3 md:pt-9">
            <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
                Skills
            </h3>
            <ul className="space-y-4 mt-4 text-lg">
                {Object.entries(skills).map(([category, items]) => (
                    <li key={category} className="w-full">
                        <div
                            onClick={() => toggleItem(category)}
                            className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
                        >
                            <div className="flex items-center gap-3 p-4">
                                {CategoryIcons[category]}
                                <div className="flex items-center gap-2 flex-grow justify-between">
                                    <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                                            openItem === category ? "rotate-180" : ""
                                        }`}
                                    >
                                        <path
                                            d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div
                                className={`transition-all duration-300 px-4 ${
                                    openItem === category
                                        ? "max-h-[500px] pb-4 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                                    {items.map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className="pl-1">•</span>
                                            <li className="pl-3">{item}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;
