import Icons from "../../shared/icons";
import PopupModal from "../../shared/popupModal";
import PlaylistDuplicateFinder from "./menu";
import SettingsMenu from "./settings";
import "./styles.css";

// await Spicetify.Player.origin.play({ uri: "spotify:track:4vYlA6QmEJeakLpipCxNv1" }, {}, {});
// use this to play songs

const showDuplicateFinderModal = (selectedPlaylist, initialView = "main") => {
  const renderModal = (view) => {
    const isSettings = view === "settings";
    PopupModal({
      title: isSettings ? "Find Duplicates Settings" : "Find Duplicates",
      content: isSettings ? (
        <SettingsMenu />
      ) : (
        <PlaylistDuplicateFinder selectedPlaylist={selectedPlaylist} />
      ),
      isLarge: true,
      buttons: (
        <>
          <Spicetify.ReactComponent.TooltipWrapper
            label={isSettings ? "Back to Duplicates" : "Settings"}
            placement="top"
          >
            <button
              className={`Modal__button Modal__button--${isSettings ? "back" : "settings"}`}
              onClick={() => renderModal(isSettings ? "main" : "settings")}
            >
              {isSettings ? (
                <Icons.React.duplicate size={18} />
              ) : (
                <Icons.React.settings size={18} />
              )}
            </button>
          </Spicetify.ReactComponent.TooltipWrapper>
          <Spicetify.ReactComponent.TooltipWrapper label="GitHub" placement="top">
            <button
              className="Modal__button Modal__button--github"
              onClick={() => window.open("https://github.com/veryboringhwl/spicetify-extensions")}
            >
              <Icons.React.github size={18} />
            </button>
          </Spicetify.ReactComponent.TooltipWrapper>
        </>
      ),
    });
  };
  renderModal(initialView);
};

let playlistUri = null;
const findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Find Duplicates",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async () => {
    const playlistMetadata = await Spicetify.Platform.PlaylistAPI.getMetadata(playlistUri);

    const selectedPlaylist = {
      uri: playlistUri,
      name: playlistMetadata.name,
    };

    showDuplicateFinderModal(selectedPlaylist);
  },
  shouldAdd: (props, trigger, target) => {
    const parsed = Spicetify.ContextMenuV2.parseProps(props);
    const uri = parsed[0][0];
    const show = Spicetify.URI.isPlaylistV1OrV2(uri);
    playlistUri = show ? uri : null;
    return show;
  },
});

findDuplicatesMenuItem.register();
