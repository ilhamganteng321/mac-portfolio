import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
  Building,
  CalendarDays,
  Code,
  Server,
  MessageSquare,
  Database,
  Cloud,
} from "lucide-react";

const Safari = () => {
  const experiences = [
    {
      id: 1,
      company: "Gancell Komputer",
      year: "2020",
      position: "Internship: Cashier, Sales Staff",
      icon: <Building className="exp-icon" />,
      points: [
        "Serve customer transactions accurately and quickly.",
        "Manage inventory and record daily sales.",
        "Interact directly with customers to provide the best service.",
      ],
    },
    {
      id: 2,
      company: "Manajemen DT Peduli",
      year: "2025",
      position: "Internship: Backend Developer",
      icon: <Code className="exp-icon" />,
      points: [
        "Designing a Database and Implementing a Backend API.",
        "Integrating the Backend with the Frontend.",
        "Deploying an Application on a Shared Hosting Environment and Cloudflare.",
        "WhatsApp Integration Using Fonte for Automatic Notifications.",
        "Google Drive API Integration for Document Storage.",
        "Website: https://santri.siapguna.org"
      ],
      techIcons: [
        <Database key="db" />,
        <Server key="server" />,
        <Cloud key="cloud" />,
        <MessageSquare key="wa" />,
      ],
    },
  ];

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              className="flex-1"
              type="text"
              placeholder="Search or enter website name"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="experience">
        <h2>My Experience</h2>
        <div className="space-y-10">
          {experiences.map(
            ({ id, company, year, position, icon, points, techIcons, links }) => (
              <div key={id} className="experience-item">
                <div className="exp-header">
                  <div className="flex items-center gap-3">
                    {icon}
                    <div>
                      <div className="flex items-center gap-3">
                        <h3>{company}</h3>
                        <div className="year-tag">
                          <CalendarDays size={14} />
                          <span>{year}</span>
                        </div>
                      </div>
                      <p className="position">{position}</p>
                    </div>
                  </div>
                  {techIcons && (
                    <div className="tech-icons">
                      {techIcons.map((icon, index) => (
                        <div key={index} className="tech-icon">
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <ul className="exp-points text-[15px]">
                  {points.map((point, index) => (
                    <li key={index}>
                      <MoveRight className="bullet-icon" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
