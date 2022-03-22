# -*- mode: ruby -*-
# vi: set ft=ruby :

# https://docs.vagrantup.com.
Vagrant.configure("2") do |config|
  config.vm.box = "generic/debian10"
  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
  config.ssh.forward_agent = true
  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 4
  end
  config.vm.synced_folder ".", "/vagrant", type: "rsync",
    rsync__exclude: [".git/","node_modules/",".docusaurus/",".yarn/","pnpm-lock.yaml","yarn.lock"]
  config.vm.provision "shell", inline: <<-SHELL
    sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
    apt-get update -y
    apt-get install -y gcc g++ make python3 git
    curl -sL https://deb.nodesource.com/setup_14.x | bash -
    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
    echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    apt-get update -y && sudo apt-get install -y nodejs yarn
  SHELL
  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    npm config set registry https://registry.npm.taobao.org
    echo 'registry "https://registry.npm.taobao.org/"' >> ~/.yarnrc
    echo "gitee.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEKxHSJ7084RmkJ4YdEi5tngynE8aZe2uEoVVsB/OvYN" >> ~/.ssh/known_hosts
    echo "cd /vagrant" >> ~/.bash_profile
    echo 'alias deploy="USE_SSH=true GITHUB_HOST=gitee.com GIT_USER=littleboyharry npm run deploy"' >> ~/.bash_profile
  SHELL
end
