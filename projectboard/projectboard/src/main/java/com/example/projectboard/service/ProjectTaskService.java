package com.example.projectboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectboard.domain.ProjectTask;
import com.example.projectboard.repository.ProjectTaskRepository;

@Service
public class ProjectTaskService {
	
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	
	public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask) {
		
		if(projectTask.getStatus() == null || projectTask.getStatus() == "") {
			projectTask.setStatus("TO_DO");
		}
		
		return projectTaskRepository.save(projectTask);
	}
	
	public Iterable<ProjectTask> findAll(){
		return projectTaskRepository.findAll();
	}
	
	public ProjectTask findById(Long id) {
		return projectTaskRepository.getById(id);
	}
	
	public void delete(Long id) {
		ProjectTask projectTask = findById(id);
		projectTaskRepository.delete(projectTask);
	}
	
}
