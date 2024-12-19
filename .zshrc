
# Created by newuser for 5.9
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=100000
SAVEHIST=100000
setopt autocd
bindkey -v

source /usr/share/zsh/plugins/zsh-autocomplete/zsh-autocomplete.plugin.zsh

setopt interactive_comments

autoload -Uz promptinit
promptinit

PROMPT="[%F{green}%n%f%F{cyan}@%F{magenta}%m%f %F{green}%~%f]%F{cyan}$%f "
RPROMPT="[%F{green}%h%f]"

export PATH=$PATH:$HOME/.local/bin
alias config='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias xcd='cd "$(xplr --print-pwd-as-result)"'

export PATH=$PATH:/home/kylex/.spicetify
export SYSTEMD_EDITOR=nvim


# The following lines were added by compinstall

zstyle ':completion:*' completer _complete _complete:-fuzzy _correct _approximate _ignored
zstyle :compinstall filename '/home/kylex/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
