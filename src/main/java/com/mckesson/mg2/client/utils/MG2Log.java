// Copyright 2014 McKesson Corporation and/or one of its subsidiaries.
package com.mckesson.mg2.client.utils;

import com.google.gwt.core.shared.GWT;

/**
 * Single logging class
 * 
 * @author efdj6eb
 *
 */
public class MG2Log {

	/**
	 * Forced console log.
	 * 
	 * @param s
	 */
	private static native void consolelog(String s) /*-{
													// force log to system console
													// TODO: revert to GWT.log(s) when upgrade to GWT 2.6.0
													console.log(s);
													}-*/;

	/**
	 * Log to both the developers window and web inspector console
	 * for desktop browser only
	 * @param s
	 */
	private static final void log(final String s) {
		
		if (AppContext.isDesktopBrowser()) {
//			GWT.log(s);
			consolelog(s);
		}
	}

	private String instanceLabel;

	/**
	 * class name
	 */
	private final String where;

	/**
	 * use new MG2Log(MyClass.class) instead
	 */
	@Deprecated
	public MG2Log() {

		this((String) null);
	}

	public MG2Log(final Class<?> clazz) {

		this(clazz.getName().substring(clazz.getName().lastIndexOf(".") + 1));
	}

	private MG2Log(final String where) {

		this.where = where == null || where.isEmpty() ? "" : where;
		this.instanceLabel = null;
	}

	/**
	 * Log an error
	 * 
	 * @param s
	 * @param t
	 */
	public void error(final String s, final Throwable t) {
		if (AppContext.isDesktopBrowser()) {
			GWT.log(getWhere() + s, t);
			consolelog("ERROR " + s);
		}
	}

	private String getWhere() {

		return where + (instanceLabel == null ? "" : "[" + instanceLabel + "]") + ":  ";
	}

	/**
	 * log information for devs
	 * 
	 * @param s
	 */
	public void info(final String s) {

		MG2Log.log(getWhere() + s);
	}

	public void setInstanceLabel(final long serialNumber) {

		instanceLabel = Long.toString(serialNumber);
	}
}
