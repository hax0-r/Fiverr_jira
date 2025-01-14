export const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Requirement Analysis',
    description: 'Collect and document client requirements for the new project.',
    status: 'TODO',
    tag: 1
  },
  {
    id: '2',
    title: 'Design Wireframes',
    description: 'Create low-fidelity wireframes for the application UI.',
    status: 'TODO',
    tag: 2
  },
  {
    id: '3',
    title: 'Develop API Endpoints',
    description: 'Build REST API endpoints for user authentication and data retrieval.',
    status: 'IN_PROGRESS',
    tag: 3
  },
  {
    id: '4',
    title: 'Unit Testing',
    description: 'Write unit tests for API endpoints using Jest framework.',
    status: 'DONE',
    tag: 3
  },
  {
    id: '5',
    title: 'Code Review',
    description: 'Review the API code for best practices and potential improvements.',
    status: 'Review',
    tag: 1
  },
  {
    id: '6',
    title: 'UI Component Review',
    description: 'Ensure the implemented UI components match the design specifications.',
    status: 'Review',
    tag: 2
  },
  {
    id: '7',
    title: 'User Acceptance Testing',
    description: 'Conduct UAT with stakeholders and gather feedback for final changes.',
    status: 'Acceptance',
    tag: 2
  },
  {
    id: '8',
    title: 'Client Demo Preparation',
    description: 'Prepare the demo environment and presentation for the client meeting.',
    status: 'Demo',
    tag: 1
  },
  {
    id: '9',
    title: 'Final Client Demo',
    description: 'Present the final product to the client for approval.',
    status: 'Demo',
    tag: 4
  },
];

export const COLUMNS = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'Review', title: 'Review' },
  { id: 'Acceptance', title: 'Acceptance' },
  { id: 'Demo', title: 'Demo' },
  { id: 'DONE', title: 'Done' },
];

export const USER_DATA = [
  {
    id: 1,
    firstName: "Daniel",
    lastName: "Serrano",
    role: "Admin",
    tag: 1
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Smith",
    role: "Viewer",
    tag: 2
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Johnson",
    role: "Viewer",
    tag: 3
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Brown",
    role: "Viewer",
    tag: 3
  },
  {
    id: 5,
    firstName: "Sophia",
    lastName: "Garcia",
    role: "Viewer",
    tag: 4
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Wilson",
    role: "Viewer",
    tag: 4
  },
  {
    id: 7,
    firstName: "Olivia",
    lastName: "Martinez",
    role: "Viewer",
    tag: 1
  },
  {
    id: 8,
    firstName: "James",
    lastName: "Taylor",
    role: "Viewer",
    tag: 1
  },
  {
    id: 9,
    firstName: "Emma",
    lastName: "Harris",
    role: "Viewer",
    tag: 1
  },
  {
    id: 10,
    firstName: "Liam",
    lastName: "Clark",
    role: "Viewer",
    tag: 1
  }
];
