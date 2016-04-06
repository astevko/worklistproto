// Copyright 2014 McKesson Corporation and/or one of its subsidiaries.
package com.mckesson.mg2.client.utils;

/**
 * @author efdj6eb
 * 
 */
public final class HtmlConstants {

	public static final String BACK = "Back";

	public static final String BACKTOLIST = "Back to List";

	public static final String BOLD_END = "</b>";

	public static final String BOLD_START = "<b>";

	public static final String BR_TAG = "<br>";

	public static final String CANNOT_LOAD_PHONEGAP = "Cannot load PhoneGap";

	public static final String DEFAULT_NO_DATA = "Failed to get data";

	public static final String INVALID_LOGIN = "Invalid login";

	public static final String LAST_LAB = "Last Lab";
	
	public static final String LAST_NOTE = "Last Note";

	public static final String MARK_REVIEWED = "Mark Reviewed";

	public static final String MESSAGE = "Message";

	public static final String NEXT = "Next";

	public static final String NEXT_NOTE = "Next Note";

	public static final String NO_INTERNET_ERRMSG = "No Internet Connection";

	public static final String RESTORED_INTERNET_MSG = "Restored Internet Connection";

	public static final String SERVER_CONNECTION_ERRMSG = "Error Connecting to Server";

	public static final String TOKEN = "&";

	public static final String UNHANDLED_EXCEPTION = "Unexpected exception encountered";

	public static final String VALID_LOGIN = "Login successful";

	public static final String SESSION_EXPIRED = "Session expired, please login";

	public static final String NO_PREVIOUS_MESSAGE_FOUND = "No previous message found";

	public static final String NO_NEXT_MESSAGE_FOUND = "No next message found";

	public static final String LOADING_PREVIOUS_MESSAGE = "Loading previous message";

	public static final String LOADING_NEXT_MESSAGE = "Loading next message";

	public static final String IMAGE_URL_PREFIX = "images/";

	// well now this is hardly a constant
	public static final String bold(final String s) {

		return BOLD_START + s + BOLD_END;
	}
}
