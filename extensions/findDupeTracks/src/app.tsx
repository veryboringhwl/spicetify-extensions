import parseProps from "../../../shared/api/parseProps.ts";
import { Icons } from "../../../shared/components/icons.tsx";
import { PopupModal } from "../../../shared/components/popupModal.tsx";
import PlaylistDuplicateFinder from "./menu.tsx";
import SettingsMenu from "./settings.tsx";
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets.push(styles);

interface SelectedPlaylist {
  uri: string;
  name: string;
}

// add a ignore button to menu so removed from duplicate list
// would be playlist specific??

const showDuplicateFinderModal = (selectedPlaylist: SelectedPlaylist, initialView = "main") => {
  const renderModal = (view: string) => {
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
  onClick: async (context: any, _item: any, _event: any) => {
    const parsed: any = parseProps(context.props);
    const uri = parsed.uri;
    const name = parsed.name;
    // sometimes the name is not there so we need to get it from metadata
    const selectedPlaylist: SelectedPlaylist = {
      uri: uri,
      name: name || (await Spicetify.Platform.PlaylistAPI.getMetadata(uri, {})?.name),
    };
    showDuplicateFinderModal(selectedPlaylist);
  },
  shouldAdd: (props: any, _trigger: any, _target: any) => {
    const parsed: any = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  },
});

findDuplicatesMenuItem.register();
