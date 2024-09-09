import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

/**
 * Tipo para las variantes del botón
 * @typedef { 'primary' |
 *            'secondary' |
 *            'success' |
 *            'danger' |
 *            'warning' |
 *            'info' |
 *            'dark' |
 *            'light' |
 *            'link' |
 *            'outline-primary' |
 *            'outline-secondary' |
 *            'outline-success' |
 *            'outline-danger' |
 *            'outline-warning' |
 *            'outline-info' |
 *            'outline-dark' |
 *            'outline-light' } FabVariant
 */

/**
 * Tipo para los tamaños del botón
 * @typedef {'sm' | 'lg'} FabSize
 */

/**
 * Tipo para la posición del botón.
 * @typedef {Object} FabPosition
 * @property {string|number} [top] posición desde el borde superior.
 * @property {string|number} [bottom] posición desde el borde inferior.
 * @property {string|number} [left] posición desde el borde izquierdo.
 * @property {string|number} [right] posición desde el borde derecho.
 */

/**
 * Floating Action Button (FAB)
 * @param {Object} props props del FAB.
 * @param {FabVariant} [props.variant] variante bootstrap del botón.
 * @param {FabSize} [props.size] tamaño del botón.
 * @param {FabPosition} props.position posición fixed del botón
 * @param {string} props.fontAwesomIcon clase de FontAwesome para el icono.
 * @param {Object} [props.btnProps] otras propiedades que serán pasadas al botón.
 * @returns
 */
function Fab({ variant, size, position, fontAwesomIcon, ...btnProps }) {
  return (
    <Button
      variant={variant}
      size={size}
      className="position-fixed rounded-circle"
      style={{ ...position }}
      {...btnProps}
    >
      <i className={fontAwesomIcon}></i>
    </Button>
  )
}

Fab.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light',
    'link',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
    'outline-warning',
    'outline-info',
    'outline-dark',
    'outline-light',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  fontAwesomIcon: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  btnProps: PropTypes.object,
}

export default Fab
