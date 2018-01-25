import _get from './get'

export default function (options) {
  return {
    get: _get(options)
  }
}
