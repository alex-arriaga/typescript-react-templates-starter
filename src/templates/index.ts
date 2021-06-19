import MyTemplate from './my-template/MyTemplate'
import AbcTemplate from './abc-template/AbcTemplate'

function createTemplateRegistry() {
  return {
    'my-template': {
      '1.0.0': MyTemplate,
    },
    'abc-template': {
      '1.0.0': AbcTemplate,
    },
  }
}

export default createTemplateRegistry
