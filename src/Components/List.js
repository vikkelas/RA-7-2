import React from "react";
import Video from "./Video";
import Article from "./Article";

function List(props) {
    // eslint-disable-next-line array-callback-return
    return props.list.map(item => {
        // eslint-disable-next-line default-case
        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} />
                );

            case 'article':
                return (
                    <Article {...item} />
                );
        }
    });
}
export default List;