import parseProps from "../../../shared/api/parseProps";
import Icons from "../../../shared/components/icons";
import PopupModal from "../../../shared/components/popupModal";
import PlaylistDuplicateFinder from "./menu";
import SettingsMenu from "./settings";
import "./styles.css";

// TODO:
// play songs in menu to see if they are duplicates
// add slider as well
// Spicetify.Player.origin.play({ uri: "spotify:track:4vYlA6QmEJeakLpipCxNv1" }, {}, {});
// Spicetify.Player.origin._state.duration
// Spicetify.Player.origin._state.positionAsOfTimestamp
// Spicetify.Player.origin._state.positionAsOfTimestamp / Spicetify.Player.origin._state.duration * 100
// Spicetify.Player.origin.seekTo(163635)
// add a ignore button to menu so removed from duplicate list

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
              className={`modal__button modal__button--${isSettings ? "back" : "settings"}`}
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
              className="modal__button modal__button--github"
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

const findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Find Duplicates",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps(context.props);
    const uri = parsed.uri;
    const name = parsed.name;
    // sometimes the name is not there so we need to get it from metadata
    const selectedPlaylist = {
      uri: uri,
      name: name || (await Spicetify.Platform.PlaylistAPI.getMetadata(uri)?.name),
    };
    showDuplicateFinderModal(selectedPlaylist);
  },
  shouldAdd: (props, trigger, target) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  },
});

findDuplicatesMenuItem.register();
