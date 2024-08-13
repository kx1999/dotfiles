# Created by newuser for 5.9
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt autocd
bindkey -v
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '$HOME/.zshrc'
source /usr/share/zsh/plugins/zsh-autocomplete/zsh-autocomplete.plugin.zsh

#autoload -U compinit && compinit
#zstyle ':completion:*' menu select
#zstyle ':completion:*' rehash true
#zstyle ':completion::complete:*' gain-privileges 1
# End of lines added by compinstall

autoload -Uz promptinit
promptinit

PROMPT="[%F{green}%n%f%F{cyan}@%F{magenta}%m%f %F{green}%~%f]%F{cyan}$%f "
RPROMPT="[%F{green}%h%f]"

export PATH=$PATH:$HOME/.local/bin
alias config='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias xcd='cd "$(xplr --print-pwd-as-result)"'
