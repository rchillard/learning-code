terraform {
  backend "consul" {
    address = "demo.consul.io"
    path = "getting-started-wowsnazzy"
    lock = "false"
  }
}
provider "aws" {
  region     = "${var.region}"
}

module "consul" {
  source = "hashicorp/consul/aws"
  version = "0.3.3"

  aws_region  = "us-east-1" # should match provider region
  num_servers = "3"
}