import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HTIV } from "./HTIVComponent";

export default {
  title: "Generic/Uncommon/HTIV",
  component: HTIV,
} as ComponentMeta<typeof HTIV>;

const GenericHTIV: ComponentStory<typeof HTIV> = ({ children }) => <HTIV>{children}</HTIV>;

export const DefaultHTIV = GenericHTIV.bind({});

DefaultHTIV.args = {
  children: (
    <>
      <p>
        Suspendisse purus mi, posuere quis tempus cursus, fringilla nec sapien. Vestibulum consequat eros sit amet metus
        lacinia venenatis. Pellentesque sed lacinia elit. Sed sollicitudin eleifend nibh, sit amet malesuada mi laoreet
        non. In quis ultricies nulla, ac convallis felis. Quisque efficitur elit nibh, at blandit metus mollis vel.
      </p>
      <p>
        Quisque sodales ornare auctor. Mauris hendrerit condimentum metus ac elementum. Ut nec lacus elit. Nam eget
        metus nec nulla maximus dictum nec vitae ex. Maecenas ipsum eros, consequat eu purus eu, bibendum sagittis mi.
        Nulla ultricies elit mi, vel fermentum est rhoncus ac. Aliquam eu sem vel dui mollis finibus ac id quam. Donec
        ut vestibulum lorem. Maecenas tincidunt vitae enim et sodales. Vivamus sit amet dolor sem.
      </p>
      <p>
        Cras euismod arcu lectus, non placerat dui imperdiet at. Suspendisse fermentum porttitor nisl vitae egestas.
        Etiam accumsan tincidunt ex eu porttitor. Proin efficitur, nibh et feugiat condimentum, lacus erat pulvinar
        massa, non ultrices felis mauris eu metus. Praesent imperdiet ultricies metus sit amet posuere. Ut lobortis
        tortor sit amet gravida commodo. Mauris ut lorem posuere, luctus arcu in, rutrum sapien. Morbi ut libero non
        diam sodales tristique vitae a erat. Sed ultrices, ligula quis sagittis tempor, neque sem pellentesque quam, sed
        fermentum nunc nisi ac risus. Phasellus ut efficitur neque, porta finibus nisl. Proin in ultrices turpis. Sed
        ante urna, vehicula lobortis elit maximus, porta vehicula diam. Cras quis neque sed arcu condimentum tempus.
        Donec nec felis ac sapien condimentum pellentesque vitae quis ipsum.
      </p>
      <p>
        Vestibulum ultricies urna eget arcu posuere hendrerit. Aliquam lobortis nisi eget turpis rutrum feugiat et in
        lorem. Maecenas eget magna non sapien bibendum placerat. Etiam vulputate hendrerit sapien vel pretium.
        Suspendisse potenti. Pellentesque imperdiet ante porta fringilla eleifend. Donec pharetra massa in hendrerit
        vehicula. Donec semper nunc sit amet magna posuere, ac bibendum sapien luctus.
      </p>
      <p>
        Suspendisse non pulvinar nisl, non laoreet ipsum. Nam et condimentum lectus. Duis viverra neque eget scelerisque
        vehicula. Etiam malesuada leo et blandit ornare. Cras at feugiat arcu. Etiam venenatis fermentum velit.
        Suspendisse viverra ut ipsum tempus aliquet. Fusce ullamcorper faucibus nisi, ac dapibus lacus rhoncus nec. In
        rhoncus sit amet erat eget ultricies. Vestibulum facilisis, eros vitae elementum suscipit, mauris eros
        condimentum massa, in congue urna massa sit amet quam. Aliquam non elit tellus. Donec ac tellus et turpis
        molestie faucibus. In hac habitasse platea dictumst. Proin diam enim, rutrum non mollis quis, lacinia quis
        dolor.
      </p>
      <p>
        Vivamus faucibus imperdiet quam, volutpat dictum orci. Vivamus commodo varius ex vel fringilla. Ut ac diam a
        libero facilisis ornare. In cursus tempus turpis, at varius tortor. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Ut suscipit aliquam enim maximus tristique. Nam viverra
        leo non dui vulputate, a ultricies dui blandit. Integer vestibulum nibh nisl. Vestibulum tincidunt vestibulum
        rhoncus. Nullam vestibulum at ligula vitae gravida. Fusce leo purus, efficitur a bibendum vestibulum,
        pellentesque sit amet nunc. In hac habitasse platea dictumst. Aenean risus sem, feugiat vestibulum tellus ac,
        blandit tincidunt diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vestibulum iaculis imperdiet placerat. Nullam nec magna risus.
      </p>
      <p>
        Duis vestibulum interdum porta. Vivamus pharetra scelerisque sollicitudin. Nulla rutrum magna vel nunc rutrum
        pharetra. Etiam felis enim, pretium ac erat sed, viverra suscipit sem. Nam elementum gravida est in porta. Etiam
        sed nisl non quam mattis viverra. Sed semper malesuada elit, at pretium quam sagittis eu. Vivamus lacus tortor,
        finibus in libero et, dictum ultricies nulla. Donec quis lectus vitae lorem rutrum commodo vel quis metus.
        Suspendisse tempus, nunc id accumsan laoreet, enim ex blandit nisl, non laoreet dui elit sed lectus. Nulla
        tempus efficitur ipsum, vitae vehicula velit dapibus vitae. Cras laoreet vitae nisl vel iaculis. Praesent ac
        euismod augue, id mollis risus. Duis et lorem imperdiet, ullamcorper ipsum a, elementum enim. Sed commodo quis
        ante semper ullamcorper.
      </p>
      <p>
        Sed in semper purus, id commodo nibh. Curabitur id tortor sapien. Integer non eleifend neque, a consequat
        ligula. Vestibulum at sagittis lacus. Vivamus cursus tristique ex non fermentum. Sed at purus non leo fringilla
        auctor quis ac nunc. Aenean sodales, metus non maximus faucibus, metus lorem volutpat tellus, eu varius est
        nulla at justo. Aliquam in purus sapien. Ut nibh lectus, imperdiet eu finibus sed, tempor et tortor. Donec at
        odio neque. Vivamus tincidunt tempus venenatis. Maecenas pellentesque, arcu et fringilla rhoncus, erat lacus
        congue lectus, non mollis ex tellus id turpis.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras cursus nunc non mi pretium, quis consequat
        erat elementum. Duis metus purus, pellentesque eget justo et, mollis pellentesque ipsum. Nunc varius porttitor
        lectus quis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Donec erat urna, lobortis bibendum libero vitae, ullamcorper efficitur ipsum. Morbi scelerisque
        volutpat vehicula. Aliquam erat volutpat. Mauris mollis arcu in semper efficitur. Morbi leo nibh, efficitur ac
        viverra vitae, feugiat quis enim. Donec vel hendrerit enim, non vehicula quam. Quisque sit amet elit tortor.
        Etiam ultricies leo at bibendum accumsan. Nunc sodales lacinia felis, nec consequat velit laoreet non. In congue
        ligula non convallis pharetra.
      </p>
      <p>
        Aenean convallis diam at nunc fermentum, eget vestibulum tortor vulputate. Suspendisse convallis, nulla quis
        maximus mollis, risus velit rhoncus lorem, et fermentum felis odio in nisl. Maecenas eget ultricies lorem. Ut
        nec nibh suscipit, scelerisque dolor in, faucibus velit. Integer rutrum sit amet leo sit amet eleifend. Fusce
        commodo sem a tincidunt eleifend. Maecenas tincidunt ex magna. Pellentesque euismod ligula eget orci eleifend
        tincidunt. Proin porta scelerisque lacus. Vestibulum venenatis sollicitudin quam. Ut ultrices aliquet mi at
        sollicitudin.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eget mi et volutpat. Duis id ipsum
        lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer leo arcu,
        sollicitudin sed enim porta, interdum pharetra est. Etiam quis felis bibendum, porta purus eu, varius velit.
        Nulla nec nisl vel sem volutpat venenatis. Mauris efficitur id odio quis pharetra. Nunc vulputate, quam quis
        venenatis molestie, lectus est luctus eros, vel rhoncus risus eros eget tortor. Suspendisse mattis ante lacus,
        ac porttitor libero congue in. Praesent convallis eros eget augue hendrerit posuere. Duis et est blandit,
        rhoncus ex non, ullamcorper sem. Duis nec lacus est.
      </p>
      <p>
        Donec mattis eleifend faucibus. Vestibulum in ante id odio lacinia dictum. Curabitur at dolor nulla. Sed
        faucibus scelerisque accumsan. Praesent facilisis tincidunt accumsan. Vivamus suscipit a erat id volutpat. Donec
        viverra, risus quis egestas porttitor, lacus mauris ullamcorper augue, eu venenatis turpis risus non eros.
        Quisque viverra molestie velit tincidunt fringilla. Aliquam vel aliquam magna, nec pellentesque mauris. Praesent
        sed lectus non urna porttitor gravida quis sed ligula. Integer maximus non nulla id facilisis. Cras ullamcorper
        dignissim ultrices. Suspendisse dictum non enim rutrum interdum. Donec sit amet orci felis.
      </p>
      <p>
        Sed diam ante, rutrum sed dignissim ut, venenatis condimentum mauris. Suspendisse suscipit odio a dui
        consectetur, ut condimentum ligula pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam eget vestibulum eros, eu eleifend ipsum. Etiam sit amet neque sed sapien aliquam aliquam. Morbi auctor
        arcu in sapien dictum, eget rhoncus eros placerat. Proin id nunc mollis, rutrum risus sit amet, ornare nulla.
      </p>
      <p>
        Maecenas eleifend tortor arcu, et pulvinar dui venenatis vitae. Donec nec quam ex. Integer vestibulum ex mauris,
        vel fringilla magna sollicitudin quis. Ut nec mauris hendrerit, efficitur tellus sit amet, finibus felis. Aenean
        gravida varius ullamcorper. Maecenas vitae mauris et lacus condimentum rutrum. Ut tincidunt urna libero. Cras
        odio massa, vehicula non ullamcorper sed, efficitur faucibus augue. Donec finibus sapien laoreet, condimentum
        quam ac, pretium nunc. Cras ullamcorper nulla eros, et efficitur enim congue at. Nam cursus iaculis libero a
        iaculis. Praesent lectus nunc, hendrerit nec dui vitae, gravida dictum enim. Fusce ac odio ut dolor eleifend
        tincidunt. Suspendisse ac hendrerit odio, eget pharetra sapien. Maecenas at tortor nec odio dignissim mollis.
      </p>
    </>
  ),
};
