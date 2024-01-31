## AnNoticeBar

> Introduction of components：

```

import AnNoticeBar from '@/components/an-notice-bar/an-notice-bar.vue"

export default {
	components:{
		AnNoticeBar
	},
}
```

> Using Components

```
<an-notice-bar :text="noticeMsg"></an-notice-bar>

//Where to use where to put
```

> Events

Property Name | Type | Default Value | Description | Platform Differences Explained 
-|-|-|-|-
text | String | No news | Collection of messages, separated by '|' between multiple messages | None
color | String | #de8c17 | Text color | None
bgColor | String | #fffbe8 | Background color of the entire horizontal bar | None
switchTime | Number | 5 | Switching time per message | None
