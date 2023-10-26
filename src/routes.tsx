// layouts
import layout1 from './layouts/layout1/layout1';

import Template from './components/HomePage/template';
import MainTable from './components/MainTable/MainTable';
import StudentSearch from './components/StudentSearch/StudentSearch';
import SubjectBarChart from './components/BarChart/SubjectBarChart';

// routes
const routes = [
    { path: '/', access: true, exact: true, title: 'Submit Feedback', layout: layout1, component: Template },
    { path: '/student-records', access: true, exact: true, title: 'Student Records', layout: layout1, component: MainTable },
    { path: '/subject-score', access: true, exact: true, title: 'Subject Score Analysis ', layout: layout1, component: SubjectBarChart },
    { path: '/generate-analysis', access: true, exact: true, title: 'Generate Student Analysis', layout: layout1, component: StudentSearch },
];

export default routes;