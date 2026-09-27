import type { CategorySlug } from "./categories";

export type ProjectType = {
  title: string;
  text: string;
  equipment: CategorySlug[];
};

// Generic project types shown on city pages with suggested equipment.
export const projectTypes: ProjectType[] = [
  { title: "Site Preparation", text: "Clearing, excavating and readying ground before building starts.", equipment: ["excavator-rental", "skid-steer-rental", "compactor-rental"] },
  { title: "Commercial Construction", text: "Material placement and work at height on larger structures.", equipment: ["telehandler-rental", "boom-lift-rental", "scissor-lift-rental"] },
  { title: "Residential Building", text: "Foundations, framing and finishing on single and multi-family lots.", equipment: ["mini-excavator-rental", "skid-steer-rental", "telehandler-rental"] },
  { title: "Grading & Drainage", text: "Shaping grades, cutting drainage and preparing base layers.", equipment: ["skid-steer-rental", "trencher-rental", "compactor-rental"] },
  { title: "Material Handling", text: "Unloading, staging and moving materials around the jobsite.", equipment: ["forklift-rental", "telehandler-rental", "wheel-loader-rental"] },
  { title: "Concrete & Site Work", text: "Pours, flatwork and the power to keep the site running.", equipment: ["concrete-equipment-rental", "compactor-rental", "generator-rental"] },
];
