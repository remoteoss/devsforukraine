import { Popover } from "@headlessui/react"
import { Reactions } from "@prisma/client"
import { Emoji, EmojiData, Picker } from "emoji-mart"
import { useState } from "react"
import { EmojiAdd } from "../Icons"
import classNames from "classnames"
import { DEFAULT_CONFETTI } from "../../utils/constants"
import { allowedEmojis } from "../../utils/allowedEmojis"

const EmojiButton = ({
  children,
  ...props
}: {
  children: React.ReactNode
  onClick?: () => Promise<void>
  id?: string
  neverDisable?: boolean
}) => {
  const [clicked, setClicked] = useState(false)
  return (
    <button
      className={classNames(
        "flex h-6 items-center min-w-[32px] justify-center px-2 py-1 bg-white bg-opacity-5 text-devs-gray100 hover:text-white transition rounded-[100px] hover:bg-opacity-10 gap-1 text-[11px] relative disabled:cursor-not-allowed disabled:hover:text-devs-gray100 disabled:bg-opacity-5"
      )}
      disabled={!props.neverDisable && clicked}
      {...props}
      onClick={async () => {
        setClicked(true)
        if (props.onClick) {
          await props.onClick()
        }
      }}
    >
      {children}
    </button>
  )
}

export const EmojiPicker = ({
  reactions: initialReactions,
}: {
  reactions: Reactions[]
}) => {
  const [reactions, setReactions] = useState(initialReactions)

  const addReaction = async (reaction: any) => {
    const exists = reactions.find((r) => r.colons === reaction.colons)
    if (exists) {
      setReactions(
        reactions.map((r) => {
          if (r.colons === reaction.colons) {
            return {
              ...r,
              uses: r.uses + 1,
            }
          }
          return r
        })
      )
    } else {
      setReactions([...reactions, { ...reaction, uses: 1 }])
    }
    window.setTimeout(() => {
      const newEl = document.getElementById(reaction.colons)

      if (newEl) {
        DEFAULT_CONFETTI(newEl)
        newEl.classList.add("emoji-clicked")

        window.setTimeout(() => {
          newEl.classList.remove("emoji-clicked")
        }, 1000)
      }
    })
    await fetch("/api/reactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reaction,
      }),
    })
  }

  return (
    <div className="flex gap-1 items-center mt-5 flex-wrap gap-y-2">
      {reactions.map((reaction) => (
        <EmojiButton
          key={reaction.colons}
          id={reaction.colons}
          onClick={() => addReaction(reaction)}
        >
          <Emoji
            size={14}
            sheetSize={16}
            set="twitter"
            emoji={reaction.colons}
          />
          {reaction.uses}
        </EmojiButton>
      ))}
      <Popover className="relative flex">
        <Popover.Button>
          <EmojiButton neverDisable>
            <EmojiAdd />
          </EmojiButton>
        </Popover.Button>

        <Popover.Panel className="absolute z-10">
          <Picker
            theme="dark"
            sheetSize={32}
            set="twitter"
            emoji=""
            onSelect={addReaction}
            showPreview={false}
            style={{ marginTop: 30 }}
            recent={[
              "flag-ua",
              "blue_heart",
              "yellow_heart",
              "sunflower",
              "heart",
              "heart_eyes",
            ]}
            emojisToShowFilter={({ name }: EmojiData) => {
              if (allowedEmojis.map((e) => e.name).includes(name)) return true

              return false
            }}
          />
        </Popover.Panel>
      </Popover>
    </div>
  )
}
