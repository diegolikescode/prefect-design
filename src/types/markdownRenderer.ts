import { marked } from 'marked'
import { VNode, RendererNode, RendererElement } from 'vue'

export type Token = ReturnType<typeof marked.lexer>[number]
export type VNodeChildren = VNode<RendererNode, RendererElement, Record<string, unknown>>[] | undefined

export type UnformattedMessagePayload = {
  text: string,
}

export type FormattedMessagePayload = {
  unformatted: string,
  tokens: marked.TokensList,
}

export type ParserOptions = {
  baseElement?: string,
  headingClasses?: string[],
  baseLinkUrl?: string | null | undefined,
}