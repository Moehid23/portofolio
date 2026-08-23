import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Warehouse Staff (Planning & Utilities Section)",
    company: "Perum Percetakan Uang Republik Indonesia (Peruri)",
    location: "Karawang, Indonesia",
    startDate: "2025-01",
    current: true,
    description: [
      "Manage spare part inventory using SAP ERP and build automation workflows with RPA (Robotic Process Automation).",
      "Developed a web-based Maintenance Notification System with Laravel 12 to speed up technical servicing for factory utilities.",
      "Built a machine learning model using Random Forest and MTBUR metrics to forecast inventory demand and optimize order recommendations."
    ]
  },
  {
    id: "2",
    title: "Intern (Money Production & Electrical Section)",
    company: "Perum Percetakan Uang Republik Indonesia (Peruri)",
    location: "Karawang, Indonesia",
    startDate: "2024-07",
    endDate: "2025-01",
    current: false,
    description: [
      "Built a data analysis model using Naive Bayes to predict spare part lifespan and optimize replacement schedules.",
      "Developed a digital Preventive Maintenance Logbook web application using Laravel 11.",
      "Created a Python tool to detect banknote numbering errors, helping reduce printing defects."
    ]
  },
  {
    id: "3",
    title: "Quality Inspector",
    company: "PT. Daihatsu Drivetrain Manufacturing Indonesia",
    location: "Karawang, Indonesia",
    startDate: "2023-01",
    endDate: "2024-06",
    current: false,
    description: [
      "Performed quality control inspections, component disassembly, hardness testing, and microstructural analysis on CVT drivetrains.",
      "Conducted high-precision measurements on gears using CMM (Coordinate Measuring Machine), roughness testers, and dial indicators.",
      "Analyzed customer quality claims, inspected defective parts, and prepared Quality Problem Reports (LMK) for corrective actions."
    ]
  },
  {
    id: "4",
    title: "Assembly Operator",
    company: "PT. JTEKT Indonesia",
    location: "Karawang, Indonesia",
    startDate: "2021-12",
    endDate: "2022-06",
    current: false,
    description: [
      "Operated precision assembly lines for automotive power steering systems, motors, and balancing pins.",
      "Conducted balancing and tolerance tests on steering pins to ensure consistent product quality.",
      "Applied Japanese manufacturing standards, workplace safety protocols, and 5S/Kaizen methodologies."
    ]
  },
  {
    id: "5",
    title: "Machining Operator",
    company: "PT. Honda Precision Parts Manufacturing",
    location: "Karawang, Indonesia",
    startDate: "2020-12",
    endDate: "2021-11",
    current: false,
    description: [
      "Set up and operated CNC (Computer Numerical Control) machines for automotive transmission gear production.",
      "Executed precision machining processes including cutting, hobbing, grinding, and deburring.",
      "Performed routine tool calibrations and machine maintenance to maintain tight tolerances and minimize defects."
    ]
  }
];
