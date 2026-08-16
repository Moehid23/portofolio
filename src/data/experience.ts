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
      "Operate SAP ERP systems for spare part inventory control and develop automated logistical workflows using RPA (Robotic Process Automation).",
      "Built a web-based Maintenance Notification System using Laravel 12 to streamline and expedite technical utility servicing.",
      "Engineered a machine learning system utilizing MTBUR (Mean Time Between Unscheduled Removal) and Random Forest algorithm to automate min-max stock predictions and order recommendations."
    ]
  },
  {
    id: "2",
    title: "General Internship Batch 2 (Money Production & Electrical Section)",
    company: "Perum Percetakan Uang Republik Indonesia (Peruri)",
    location: "Karawang, Indonesia",
    startDate: "2024-07",
    endDate: "2025-01",
    current: false,
    description: [
      "Created a data mining analytical project using the Naive Bayes Classifier to predict spare part lifespan and optimize lifecycle management.",
      "Designed and developed a digital web-based Preventive Maintenance Logbook system utilizing Laravel 11 framework.",
      "Developed a custom Python application to sort and detect banknote numbering indicator failures, significantly reducing printing error sheets."
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
      "Conducted comprehensive quality control, disassemblies, hardness testing, and microstructural analysis of CVT drivetrain components.",
      "Performed high-precision dimensional measurements on mechanical gears using CMM (Coordinate Measuring Machine), Gear Tester, Roughness Tester, Dial Indicators, and various technical metrology instruments.",
      "Analyzed market claims of transmission failures, measured gear elements, and compiled detailed Quality Problem Reports (LMK) to coordinate corrective engineering actions."
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
      "Operated precision assembly lines for power steering systems, focusing on power steering jackets, motors, and balancing pin systems.",
      "Conducted high-precision balancing tests on steering pins to ensure strict tolerance levels and high-quality product assembly.",
      "Adhered strictly to rigorous Japanese manufacturing standards, active safety protocols, and workplace methodologies (5S and Kaizen)."
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
      "Set up and operated high-precision CNC (Computer Numerical Control) machines for automotive transmission gear production.",
      "Performed advanced manufacturing processes, including rough cutting, hobbing, grinding, and deburring.",
      "Conducted regular tools calibration and automated machinery maintenance to ensure optimal tolerance limits and zero defect rates."
    ]
  }
];
