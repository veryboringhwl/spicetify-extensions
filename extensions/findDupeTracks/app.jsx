import Icons from "../../shared/icons";
import PopupModal from "../../shared/popupModal";
import PlaylistDuplicateFinder from "./menu";
import "./styles.scss";

let playlistUri = null;

const findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Find Duplicates",
  leadingIcon: Icons.duplicate,
  onClick: async () => {
    const playlistMetadata = await Spicetify.Platform.PlaylistAPI.getMetadata(playlistUri);

    const selectedPlaylist = {
      uri: playlistUri,
      name: playlistMetadata.name,
    };

    PopupModal({
      title: "Find Duplicates",
      content: <PlaylistDuplicateFinder selectedPlaylist={selectedPlaylist} />,
      isLarge: true,
    });
  },
  shouldAdd: (props, trigger, target) => {
    const parsedProps = Spicetify.ContextMenuV2.parseProps(props);
    if (!parsedProps || !Array.isArray(parsedProps)) {
      playlistUri = null;
      return false;
    }
    const [uri] = parsedProps;
    const shouldDisplayMenuItem = Spicetify.URI.isPlaylistV1OrV2(uri[0]);

    if (shouldDisplayMenuItem) {
      playlistUri = uri[0];
    } else {
      playlistUri = null;
    }

    return shouldDisplayMenuItem;
  },
});

findDuplicatesMenuItem.register();
