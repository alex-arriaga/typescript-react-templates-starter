import createTemplateRegistry from '../templates'
import render, {rehydrateByAttributes, renderByAttributes} from './core/template-renderer'

declare global {
  interface Window {
    TEMPLATE_REGISTRY: any
  }
}

// Make sure the registry is populated before rendering anything
window.TEMPLATE_REGISTRY = createTemplateRegistry()

const optionsBySpecificRootElement = {
  templateName: 'my-template',
  templateVersion: '1.0.0',
  el: '#root',
}

// PoC: rendering to an specific DOM element
render(optionsBySpecificRootElement)

// PoC: rendering to any element with data attribute '[data-rt-csr="true"]'
renderByAttributes()

// PoC: rehydrating any parent element with data attribute '[data-rt-rehydrate="true"]'
rehydrateByAttributes()
