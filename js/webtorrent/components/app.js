const React = require('react')

const MediaViewer = require('./mediaViewer')
const TorrentViewer = require('./torrentViewer')

class App extends React.Component {
  render () {
    const {torrent, torrentID, errorMessage, parsedTorrent} = this.props.store
    const ix = parsedTorrent && parsedTorrent.ix // Selected file index
    let name = parsedTorrent && parsedTorrent.name
    if (name) document.title = name

    if (torrent && ix != null) {
      return <MediaViewer torrent={torrent} ix={ix} />
    } else {
      return (
        <TorrentViewer
          name={name}
          torrent={torrent}
          torrentID={torrentID}
          errorMessage={errorMessage}
          dispatch={this.props.dispatch} />
      )
    }
  }
}

module.exports = App
