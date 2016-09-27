import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'content',
  template: `
    <div id="content-container">
      <p>Content</p>

      <repository-list
        [repositories]="repositories"
        (repositoryClick)="repositoryClick.emit($event)"
      ></repository-list>

      <issue-list
        [repoFullName]="selectedRepo.fullName"
        [issues]="selectedRepoIssues"
      ></issue-list>
    </div>
  `,
})

export default class ContentComponent {
  @Input() public repositories: any[];
  @Input() public selectedRepo: any;
  @Input() public selectedRepoIssues: any[];
  @Output() public repositoryClick: EventEmitter<number> = new EventEmitter();
}