import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<div className="container mx-auto">
			<div className=" px-16 py-10 w-full rounded-3xl flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className=" font-bold text-3xl pb-6">
							Safe<span className="text-[#f06d63]">rent</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#f06d63] cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#f06d63] cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#f06d63] cursor-pointer">
							FAQs
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#f06d63] cursor-pointer">
							Careers
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-2xl pb-4">Legal</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#f06d63] cursor-pointer">
							Returns policy
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#f06d63] cursor-pointer">
							Refunds policy
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-2xl pb-4">Subscribe</p>
						
						<div>
							<input type="email" name="emailSupport" className="bg-[#d6cece]" /> <br /><br />
							<textarea name="subjectSupport" className="bg-[#d6cece]" ></textarea>
						</div>
					</ul>
				</div>
			</div>
            
            </div>
	
	);
}

export default Footer;