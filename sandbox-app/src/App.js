import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectSidebar from "./ProjectSidebar";
import { useState } from 'react';



function App() {
 const [projectState, setProjectState]= useState({
  selectedProject : undefined,
  projects: []
});

function handleStartAddProject(){
  setProjectState(prevState =>{
    return{
      ...prevState,
      selectedProject:null,
    };
  });
}

function handleAddProject(projectData){
  setProjectState(prevState => {
    const newProject ={
      ...projectData,
      id: Math.random()
    };

    return {
      ...prevState,
      projects: [...prevState.projects, newProject ]
    }
  })
}

console.log(projectState);

let content;

if (projectState.selectedProject ===null) {
  content= <NewProject onAdd ={handleAddProject} />
}else if (projectState.selectedProject === undefined) {
  content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
}


  return (
    <main className="h-screen my-8 flex gap-8">
      
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  
);

}

export default App;
