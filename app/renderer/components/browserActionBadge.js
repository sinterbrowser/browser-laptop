/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const ImmutableComponent = require('../../../js/components/immutableComponent')

class BrowserActionBadge extends ImmutableComponent {
  constructor () {
    super()
    this.determineLayout = this.determineLayout.bind(this)
  }

  determineLayout () {
    const verb = this.refs.badge.offsetWidth > 20 ? 'add' : 'remove'
    this.refs.badge.classList[verb]('center')
  }

  componentDidMount () {
    this.determineLayout()
  }

  componentDidUpdate () {
    this.determineLayout()
  }

  render () {
    return <div
      ref='badge'
      className='browserActionBadge'
      style={{backgroundColor: this.props.color}}
      >{this.props.text}</div>
  }
}

module.exports = BrowserActionBadge
