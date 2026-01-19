import { parseProps } from "../../../shared/api/parseProps.ts";
import { Icons } from "../../../shared/components/icons.tsx";
import { PopupModal } from "../../../shared/components/popupModal.tsx";
import { PlaylistDuplicateFinder } from "./menu.tsx";
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets.push(styles);

interface SelectedPlaylist {
  uri: string;
  name: string;
  type: string;
}

// add a ignore button to menu so removed from duplicate list
// would be playlist specific??

const findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Find Duplicates",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context: any, _item: any, _event: any) => {
    const parsed: any = parseProps(context.props);
    const uri = parsed.uri;
    const name = parsed.name;
    const type = Spicetify.URI.from(uri)?.type;

    const selectedPlaylist: SelectedPlaylist = {
      uri: uri,
      name:
        name ||
        (
          (await Spicetify.Platform.PlaylistAPI.getMetadata(uri, {})) as unknown as {
            name?: string;
          }
        )?.name ||
        "",
      type: type || "",
    };

    PopupModal({
      title: "Find Duplicates",
      content: <PlaylistDuplicateFinder selectedPlaylist={selectedPlaylist} />,
      isLarge: true,
      template: false,
    });
  },
  divider: "after",
  shouldAdd: (props: any, _trigger: any, _target: any) => {
    const parsed: any = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  },
});

findDuplicatesMenuItem.register();
