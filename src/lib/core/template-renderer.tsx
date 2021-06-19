import ReactDOM from 'react-dom'

const renderTemplate = ReactDOM.render
const hydrateTemplate = ReactDOM.hydrate

type RenderOptions = {
  templateName: string
  templateVersion: string
}

type RenderOptionsByRootElement = RenderOptions & {
  el: string
}

type RenderOptionsByAttribute = {
  attrSelector: string
}

//
function validateOptions(options: RenderOptions): boolean {
  // @TODO: Improve validation for required options at runtime
  return Object.keys(options).length > 0
}

function getTemplate(templateName: string, templateVersion: string) {
  return window.TEMPLATE_REGISTRY[templateName][templateVersion]
}

function render(options: RenderOptionsByRootElement) {
  validateOptions(options)
  const Template = getTemplate(options.templateName, options.templateVersion)
  const $el = document.querySelector(options.el) || document.querySelector('body')

  renderTemplate(<Template message={' client side rendering'} />, $el)
}

export function renderByAttributes(options: RenderOptionsByAttribute = { attrSelector: '[data-rt-csr="true"]' }) {
  const $placesToRender = Array.from(document.querySelectorAll(options.attrSelector)) || []

  $placesToRender.forEach(($el: Element) => {
    if ($el instanceof HTMLElement) {
      const templateName = $el.dataset.rtTemplateName
      const templateVersion = $el.dataset.rtTemplateVersion

      // @TODO: Validate the data attributes have expected strings
      if (templateName && templateVersion) {
        const Template = getTemplate(templateName, templateVersion)
        renderTemplate(<Template message={' client side rendering'} />, $el)
      }
    }
  })
}

export function rehydrateByAttributes(
  options: RenderOptionsByAttribute = { attrSelector: '[data-rt-rehydrate="true"]' }
) {
  const $placesToRehydrate = Array.from(document.querySelectorAll(options.attrSelector)) || []

  $placesToRehydrate.forEach(($el: Element) => {
    if ($el instanceof HTMLElement) {
      const templateName = $el.dataset.rtTemplateName
      const templateVersion = $el.dataset.rtTemplateVersion

      // @TODO: Validate the data attributes have expected strings
      if (templateName && templateVersion) {
        const Template = getTemplate(templateName, templateVersion)
        hydrateTemplate(<Template message={' client side rendering'} />, $el)

        // Mark container as rehydrated
        $el.dataset.rtRehydrated = 'true'
      }
    }
  })
}

export default render
