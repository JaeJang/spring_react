import _ from 'lodash';

class ProjectTask {
  constructor(object) {
    this.initWithObject(object);
  }

  initWithObject(object) {
    this.id = _.get(object, 'id');
    this.summary = _.get(object, 'summary');
    this.acceptanceCriteria = _.get(object, 'acceptanceCriteria');
    this.status = _.get(object, 'status');

    return this;
  }

  toJSON() {
    return { id: this.id, summary: this.summary, acceptanceCriteria: this.acceptanceCriteria, status: this.status };
  }

  hasError() {
    const errors = {};
    if (!this.summary) {
      errors.summary = 'Summary cannot be blank';
    }
    if (!this.acceptanceCriteria) {
      errors.acceptanceCriteria = 'Criteria cannot be blank';
    }
    return errors;
  }
}

export default ProjectTask;
